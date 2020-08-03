import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import {
  SBSortableHeaderDirective,
  SortEvent
} from "@modules/tables/directives";
import { Country } from "@modules/tables/models";
import { CountryService } from "@modules/tables/services";
import { Observable } from "rxjs";
import { PathComp } from "@modules/tables/models/pathcomp";

@Component({
  selector: "sb-ng-bootstrap-table",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./ng-bootstrap-table.component.html",
  styleUrls: ["ng-bootstrap-table.component.scss"]
})
export class NgBootstrapTableComponent implements OnInit {
  @Input() pageSize = 4;
  pathcomps$!: PathComp[];
  countries$!: Observable<Country[]>;
  total$!: Observable<number>;
  sortedColumn!: string;
  sortedDirection!: string;

  @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<
    SBSortableHeaderDirective
  >;

  constructor(
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.countryService.pageSize = this.pageSize;
    this.countries$ = this.countryService.countries$;
    //servicecall for table
    this.countryService.pathcomps$().subscribe(res => {
      this.pathcomps$ = res;
      console.log(res);
    });
    // console.log("pathcomp", this.pathcomp$!);
    this.total$ = this.countryService.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this.countryService.sortColumn = column;
    this.countryService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
  }
}

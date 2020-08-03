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
import { DashboardService } from '@modules/dashboard/services'
@Component({
  selector: "sb-ng8-bootstrap-table",
  templateUrl: "./ng8-bootstrap-table.component.html",
  styleUrls: ["./ng8-bootstrap-table.component.scss"]
})
export class Ng8BootstrapTableComponent implements OnInit {
  @Input() pageSize = 4;

  countries$!: Observable<Country[]>;
  loading = false
  total$!: Observable<number>;
  sortedColumn!: string;
  sortedDirection!: string;
  tableData = []
  currentPage = []

  @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<
    SBSortableHeaderDirective
  >;

  constructor(
    public dashboardService: DashboardService,
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loading = true
      this.dashboardService.getContentWiseList().subscribe(data =>{
        this.loading = false
        this.tableData = data.results
        this.currentPage = this.tableData.filter((items, index) => index <4)
        this.changeDetectorRef.detectChanges()
      })
    this.countryService.pageSize = this.pageSize;
    this.countries$ = this.countryService.countries$;
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

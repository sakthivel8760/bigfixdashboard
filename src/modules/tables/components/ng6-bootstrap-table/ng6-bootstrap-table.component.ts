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
  selector: "sb-ng6-bootstrap-table",
  templateUrl: "./ng6-bootstrap-table.component.html",
  styleUrls: ["./ng6-bootstrap-table.component.scss"]
})
export class Ng6BootstrapTableComponent implements OnInit {
  @Input() pageSize = 4;
  loading = false;

  countries$!: Observable<Country[]>;
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
    this.currentPage = this.tableData.filter((data, index) => index <4)
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

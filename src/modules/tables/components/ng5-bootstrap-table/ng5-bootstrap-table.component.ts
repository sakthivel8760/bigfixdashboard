import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import {
  SBSortableHeaderDirective,
  SortEvent
} from '@modules/tables/directives'
import { Country } from '@modules/tables/models'
import { CountryService } from '@modules/tables/services'
import { DashboardService } from '@modules/dashboard/services'
import { Observable } from 'rxjs'
@Component({
  selector: 'sb-ng5-bootstrap-table',
  templateUrl: './ng5-bootstrap-table.component.html',
  styleUrls: ['./ng5-bootstrap-table.component.scss']
})
export class Ng5BootstrapTableComponent implements OnInit {
  tableData = []
  searchTerm = ''
  loading = false
  pageSize = 4
  currentPage = 1
  total = 25
  constructor (
    public dashboardService: DashboardService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit () {
    this.loading = true
      this.dashboardService.getContentWiseList().subscribe(data =>{
        this.loading = false
        this.tableData = data.results
        this.changeDetectorRef.detectChanges()
      })
  }
}

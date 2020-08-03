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
@Component({
  selector: "sb-ng8-bootstrap-table",
  templateUrl: "./ng8-bootstrap-table.component.html",
  styleUrls: ["./ng8-bootstrap-table.component.scss"]
})
export class Ng8BootstrapTableComponent implements OnInit {
  @Input() pageSize = 4;

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
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tableData = [
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Update", 
        "Computer Groups": "", 
        "ID": "7056785", 
        "Name": "Java Runtime Environment 8 update 212 (32-bit) Available (JRE 8 32-bit version Installed) (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Updates for Windows Applications", 
        "Source": "Oracle", 
        "Source ID": "Oracle Critical Patch Update Advisory - April 2019", 
        "Source Release Date": "4/16/2019", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b973a"
      }, 
      {
        "Applicable Computer Count": "4", 
        "Category": "Security Update", 
        "Computer Groups": "", 
        "ID": "7056871", 
        "Name": "Java Runtime Environment 8 update 261 (32-bit) Available (JRE 8 32-bit version Installed) (x64) - CPU", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Updates for Windows Applications", 
        "Source": "Oracle", 
        "Source ID": "Oracle Critical Patch Update Advisory - July 2020", 
        "Source Release Date": "7/14/2020", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b973b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Update", 
        "Computer Groups": "", 
        "ID": "7056863", 
        "Name": "Java Runtime Environment 8 update 261 Available (x64) (JRE 8 Installed) - CPU", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Updates for Windows Applications", 
        "Source": "Oracle", 
        "Source ID": "Oracle Critical Patch Update Advisory - July 2020", 
        "Source Release Date": "7/14/2020", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b973c"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Microsoft Unsupported", 
        "Computer Groups": "", 
        "ID": "591", 
        "Name": "Microsoft Unsupported: Windows 10 version 1803 (Non-Enterprise and Non-Education editions)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "Unspecified", 
        "Source Release Date": "10/31/2019", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b973f"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Microsoft Unsupported", 
        "Computer Groups": "", 
        "ID": "612", 
        "Name": "Microsoft Unsupported: Windows 7", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "Unspecified", 
        "Source Release Date": "4/9/2013", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9740"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1101913", 
        "Name": "MS11-019: Vulnerabilities in SMB Client Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2511455", 
        "Source Release Date": "4/12/2011", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9743"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1103013", 
        "Name": "MS11-030: Vulnerability in DNS Resolution Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2509553", 
        "Source Release Date": "4/12/2011", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b974b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1105311", 
        "Name": "MS11-053: Vulnerability in Bluetooth Stack Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2532531", 
        "Source Release Date": "7/12/2011", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b974e"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1109213", 
        "Name": "MS11-092: Vulnerability in Windows Media Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2619339", 
        "Source Release Date": "12/13/2011", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9754"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1110027", 
        "Name": "MS11-100: Vulnerabilities in .NET Framework Could Allow Elevation of Privilege - Microsoft .NET Framework 3.5.1 - Windows 7 SP1 / 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2656356", 
        "Source Release Date": "12/29/2011", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9755"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1201311", 
        "Name": "MS12-013: Vulnerability in C Run-Time Library Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2654428", 
        "Source Release Date": "2/14/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9758"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1202021", 
        "Name": "MS12-020: Vulnerabilities in Remote Desktop Could Allow Remote Code Execution - Windows 7 Gold/SP1 (KB2621440) (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2621440", 
        "Source Release Date": "3/13/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9759"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1202051", 
        "Name": "MS12-020: Vulnerabilities in Remote Desktop Could Allow Remote Code Execution - Windows 7 Gold/SP1 (KB2667402) (x64) - V2.0", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2667402", 
        "Source Release Date": "6/12/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b975a"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1202419", 
        "Name": "MS12-024: Vulnerability in Windows Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2653956", 
        "Source Release Date": "4/10/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b975b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1203537", 
        "Name": "MS12-035: Vulnerabilities in .NET Framework Could Allow Remote Code Execution - Microsoft .NET Framework 3.5.1 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2604115", 
        "Source Release Date": "5/8/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b975d"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1203619", 
        "Name": "MS12-036: Vulnerability in Remote Desktop Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2685939", 
        "Source Release Date": "6/12/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b975e"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1204519", 
        "Name": "MS12-045: Vulnerability in Microsoft Data Access Components Could Allow Remote Code Execution - Windows Data Access Components 6.0 - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2698365", 
        "Source Release Date": "7/10/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b975f"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1207219", 
        "Name": "MS12-072: Vulnerabilities in Windows Shell Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2727528", 
        "Source Release Date": "11/13/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9761"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1207437", 
        "Name": "MS12-074: Vulnerabilities in .NET Framework Could Allow Remote Code Execution - .NET Framework 3.5.1 - Windows 7 SP1 / Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2729452", 
        "Source Release Date": "11/13/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9762"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1208119", 
        "Name": "MS12-081: Vulnerability in Windows File Handling Component Could Allow Remote Code Execution - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2758857", 
        "Source Release Date": "12/11/2012", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9763"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Update", 
        "Computer Groups": "", 
        "ID": "1309065", 
        "Name": "MS13-090: Cumulative Security Update of ActiveX Kill Bits - Windows 7 SP1 - KB2900986 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2900986", 
        "Source Release Date": "2/22/2016", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9772"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1309819", 
        "Name": "MS13-098: Vulnerability in Windows Could Allow Remote Code Execution - Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2893294", 
        "Source Release Date": "12/10/2013", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9775"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1400703", 
        "Name": "MS14-007: Vulnerability in Direct2D Could Allow Remote Code Execution - Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2912390", 
        "Source Release Date": "2/11/2014", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9777"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1404307", 
        "Name": "MS14-043: Vulnerability in Windows Media Center Could Allow Remote Code Execution - Windows 7 SP1 - KB2978742 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2978742", 
        "Source Release Date": "8/12/2014", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b977b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Security Hotfix", 
        "Computer Groups": "", 
        "ID": "1405769", 
        "Name": "MS14-057: Vulnerabilities in .NET Framework Could Allow Remote Code Execution - Windows Server 2008 R2 SP1 / Windows 7 SP1 - .NET Framework 3.5.1 - KB2972100 (x64)", 
        "Progress": "0.0", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2972100", 
        "Source Release Date": "10/14/2014", 
        "Source Severity": "Critical", 
        "Type": "Fixlet", 
        "_id": "5f26a461360e0eb9921b9784"
      }
    ]
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

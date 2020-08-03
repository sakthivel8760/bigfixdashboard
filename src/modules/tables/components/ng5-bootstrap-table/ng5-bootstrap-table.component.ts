import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  NgZone,
  OnChanges
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
export class Ng5BootstrapTableComponent implements OnInit, OnChanges {
  tableData = []
  searchTerm = ''
  loading = false
  pageSize = 4
  currentPage = []
  constructor (
    public dashboardService: DashboardService,
    public ngZone: NgZone
  ) {
  }

  ngOnChanges () {
    console.log(this.tableData)
  }

  ngOnInit () {
    this.loading = true
    this.tableData = [
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "331 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2444328: You cannot access shared files or shared printers in Windows 7 or in Windows Server 2008 R2 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2444328", 
        "Source Release Date": "12/18/2010", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b958b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "1.26 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2465772: An application or service that uses Winsock API or Winsock Kernel API may randomly stop responding in Windows Server 2008 R2 or in Windows 7 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2465772", 
        "Source Release Date": "10/9/2014", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b958c"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "784 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2492505: Computer does not crash when the disk is full after CrashOnAuditFail is set in Windows 7 or in Windows Server 2008 R2 - Windows 7 Gold/ SP1 / Windows Server 2008 R2 Gold/SP1 - KB2492505 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2492505", 
        "Source Release Date": "1/13/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b958d"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Critical Updates", 
        "Computer": "RTPL-LAP-381", 
        "Computer Groups": "RTPL-LAP-381", 
        "Download Size": "2.77 MB", 
        "IP Address": [
          "192.168.43.190"
        ], 
        "Name": "2501584: Office File Validation Add-in - Office 2003 / Office 2007 / Office 2010 - KB2501584", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2501584", 
        "Source Release Date": "4/11/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Task", 
        "_id": "5f26a45d360e0eb9921b958e"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "225 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2506928: A link in an .html file that you open in Outlook does not work in Windows 7 or in Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2506928", 
        "Source Release Date": "4/25/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b958f"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "1.61 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2515325: Windows Explorer may crash in Windows 7 or in Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2515325", 
        "Source Release Date": "4/25/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9590"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "592 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2520155: DNS Host record of a computer is deleted after you change the DNS server assignment - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2520155", 
        "Source Release Date": "3/11/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9591"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "394 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2520487: AD DS database size increases significantly when the Credential Roaming feature is enabled in Windows Vista, in Windows 7, in Windows Server 2008 or in Windows Server 2008 R2 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2520487", 
        "Source Release Date": "7/11/2012", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9592"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "892 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2535094: Server stops responding when you lock or unlock files on a network by using the SMB2 protocol in Windows - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2535094", 
        "Source Release Date": "12/9/2014", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9593"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "1.18 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2543367: Hotfix available for Windows daylight saving time support for Chile, Egypt, and Morocco - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2543367", 
        "Source Release Date": "8/9/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9594"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "2.32 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2545698: Text in some core fonts appears blurred in Internet Explorer 9 on a computer that is running Windows Vista, Windows Server 2008, Windows 7, or Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2545698", 
        "Source Release Date": "9/19/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9595"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "4.74 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2547666: You cannot delete long URLs from the browsing history in Internet Explorer on a computer that is running Windows 7 or Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2547666", 
        "Source Release Date": "6/27/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9596"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "458 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2550978: \"0x0000007B\" Stop error after you replace an identical iSCSI network adapter - Windows 7 SP1 - KB2550978 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2550978", 
        "Source Release Date": "1/8/2017", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9597"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Critical Updates", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "708 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2552343: Time-out error occurs when you install a Windows Update package that contains drivers on a computer that is running Windows 7 or Windows Server 2008 R2 - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2552343", 
        "Source Release Date": "6/27/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9598"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update Rollup", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "196 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2562937: Update Rollup for ActiveX - Windows 7 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2562937", 
        "Source Release Date": "8/9/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b9599"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "366 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2563227: An SVG graphic that has attributes that use large values may not be parsed correctly - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2563227", 
        "Source Release Date": "8/8/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959a"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "2.22 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2574819: An update is available that adds support for DTLS in Windows 7 SP1 and Windows Server 2008 R2 SP1 - Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2574819", 
        "Source Release Date": "9/10/2013", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959b"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "434 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2577795: Kernel sockets leak on a multiprocessor computer that is running Windows Server 2008 R2 or Windows 7 - Windows 7 Gold/SP1 / Windows Server 2008 R2 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2577795", 
        "Source Release Date": "7/10/2014", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959c"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "762 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2578159: The logon process stops responding in Windows Server 2008 R2 or in Windows 7 - Windows 7 Gold/SP1 / Windows Server 2008 R2 Gold/SP1 - KB2578159 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2578159", 
        "Source Release Date": "8/10/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959d"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "479 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2617858: Unexpectedly slow startup or logon process in Windows Server 2008 R2 or in Windows 7 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2617858", 
        "Source Release Date": "9/21/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959e"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "1.66 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2618669: An update is available to detect and prevent too much consumption of the global RID pool on a domain controller that is running Windows Server 2008 R2 - Windows 7 SP1 / Windows Server 2008 R2 Gold/SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2618669", 
        "Source Release Date": "12/28/2012", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b959f"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "4.20 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2637518: An update is available - .NET Framework 3.5.1 - Windows 2008 R2 SP1 / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2637518", 
        "Source Release Date": "2/16/2012", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b95a0"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "7.68 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2640148: Windows Explorer stops responding if you try to expand a mapped drive in Windows 7 or in Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2640148", 
        "Source Release Date": "2/14/2012", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b95a1"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Hotfix", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "247 KB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2646563: SMB2 directory cache is not updated correctly if a file is deleted in Windows 7 or in Windows Server 2008 R2 - Windows 7 SP1 / Windows Server 2008 R2 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2646563", 
        "Source Release Date": "11/24/2011", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b95a2"
      }, 
      {
        "Applicable Computer Count": "1", 
        "Category": "Update", 
        "Computer": "RAKSHA-SONY-PC", 
        "Computer Groups": "RAKSHA-SONY-PC", 
        "Download Size": "1.65 MB", 
        "IP Address": [
          "192.168.1.100"
        ], 
        "Name": "2647753: Update rollup: Fix printing problems in Windows 7 and Windows Server 2008 R2 - Windows 7 Gold / Windows 7 SP1 (x64)", 
        "Progress": "0.0", 
        "Relationship": "Applicable", 
        "Remediated Computer Count": "0", 
        "Sitename": "Patches for Windows", 
        "Source": "Microsoft", 
        "Source ID": "KB2647753", 
        "Source Release Date": "3/12/2012", 
        "Source Severity": "Unspecified", 
        "Type": "Fixlet", 
        "_id": "5f26a45d360e0eb9921b95a3"
      }
    ]
    this.currentPage = this.tableData.filter((data, index) => index <4)
      this.dashboardService.getContentWiseList().subscribe(data =>{
        this.tableData = data
      })
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-dashboard1-tables",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard1-tables.component.html",
  styleUrls: ["./dashboard1-tables.component.scss"]
})
export class Dashboard1TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

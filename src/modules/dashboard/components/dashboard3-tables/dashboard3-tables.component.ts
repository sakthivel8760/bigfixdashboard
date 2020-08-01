import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-dashboard3-tables",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard3-tables.component.html",
  styleUrls: ["./dashboard3-tables.component.scss"]
})
export class Dashboard3TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

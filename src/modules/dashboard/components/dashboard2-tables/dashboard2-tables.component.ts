import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-dashboard2-tables",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard2-tables.component.html",
  styleUrls: ["./dashboard2-tables.component.scss"]
})
export class Dashboard2TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-dashboard4-tables",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard4-tables.component.html",
  styleUrls: ["./dashboard4-tables.component.scss"]
})
export class Dashboard4TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

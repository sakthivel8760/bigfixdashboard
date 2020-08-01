/* tslint:disable: ordered-imports*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

/* Modules */
import { AppCommonModule } from "@common/app-common.module";
import { NavigationModule } from "@modules/navigation/navigation.module";
import { ChartsModule } from "@modules/charts/charts.module";
import { TablesModule } from "@modules/tables/tables.module";

/* Components */
import * as dashboardComponents from "./components";

/* Containers */
import * as dashboardContainers from "./containers";

/* Guards */
import * as dashboardGuards from "./guards";

/* Services */
import * as dashboardServices from "./services";

import { from } from "rxjs";
import { Dashboard1TablesComponent } from "./components/dashboard1-tables/dashboard1-tables.component";
import { Dashboard2TablesComponent } from "./components/dashboard2-tables/dashboard2-tables.component";
import { Dashboard3TablesComponent } from "./components/dashboard3-tables/dashboard3-tables.component";
import { Dashboard4TablesComponent } from "./components/dashboard4-tables/dashboard4-tables.component";
import { Dashboard5TablesComponent } from "./components/dashboard5-tables/dashboard5-tables.component";
import { Dashboard6TablesComponent } from "./components/dashboard6-tables/dashboard6-tables.component";
import { Dashboard7TablesComponent } from "./components/dashboard7-tables/dashboard7-tables.component";
import { Dashboard8TablesComponent } from "./components/dashboard8-tables/dashboard8-tables.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    ChartsModule,
    TablesModule
  ],
  providers: [...dashboardServices.services, ...dashboardGuards.guards],
  declarations: [
    ...dashboardContainers.containers,
    ...dashboardComponents.components,
    Dashboard1TablesComponent,
    Dashboard2TablesComponent,
    Dashboard3TablesComponent,
    Dashboard4TablesComponent,
    Dashboard5TablesComponent,
    Dashboard6TablesComponent,
    Dashboard7TablesComponent,
    Dashboard8TablesComponent
  ],
  exports: [
    ...dashboardContainers.containers,
    ...dashboardComponents.components
  ]
})
export class DashboardModule {}

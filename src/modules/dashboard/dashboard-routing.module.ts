/* tslint:disable: ordered-imports*/
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SBRouteData } from "@modules/navigation/models";

/* Module */
import { DashboardModule } from "./dashboard.module";

/* Containers */
import * as dashboardContainers from "./containers";

/* Guards */
import * as dashboardGuards from "./guards";

/* Routes */
export const ROUTES: Routes = [
  {
    path: "",
    data: {
      title: "PatchCompliance",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.DashboardComponent
  },
  {
    path: "ActionStatus",
    data: {
      title: "ActionStatus",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "ActionStatus",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard1Component
  },
  {
    path: "Regional&Outlevel",
    data: {
      title: "Regional&Outlevel",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "Regional&Outlevel",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard2Component
  },
  {
    path: "Regional&Outlevel",
    data: {
      title: "Regional&Outlevel",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "Regional&Outlevel",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard3Component
  },
  {
    path: "RelayHealth",
    data: {
      title: "RelayHealth",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "RelayHealth",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard4Component
  },
  {
    path: "ContentWise",
    data: {
      title: "ContentWise",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "ContentWise",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard5Component
  },
  {
    path: "PendingPatch",
    data: {
      title: "PendingPatch",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "PendingPatch",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard6Component
  },
  {
    path: "SeverityBased",
    data: {
      title: "SeverityBased",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "SeverityBased",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard7Component
  },
  {
    path: "OverallComplaince",
    data: {
      title: "OverallComplaince",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "OverallComplaince",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.Dashboard8Component
  },
  {
    path: "static",
    data: {
      title: "Theme Static",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "Static",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.StaticComponent
  },
  {
    path: "light",
    data: {
      title: "Theme Light",
      breadcrumbs: [
        {
          text: "PatchCompliance",
          link: "/PatchCompliance"
        },
        {
          text: "Light",
          active: true
        }
      ]
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.LightComponent
  }
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

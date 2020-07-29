/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.DashboardComponent,
    },
    {
        path: 'dashboard1',
        data: {
            title: 'Dashboard 1 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard1',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard1Component,
    },
    {
        path: 'dashboard2',
        data: {
            title: 'Dashboard 2 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard2',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard2Component,
    },
    {
        path: 'dashboard3',
        data: {
            title: 'Dashboard 3 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard3',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard3Component,
    },
    {
        path: 'dashboard4',
        data: {
            title: 'Dashboard 4 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard4',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard4Component,
    },
    {
        path: 'dashboard5',
        data: {
            title: 'Dashboard 5 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard5',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard5Component,
    },
    {
        path: 'dashboard6',
        data: {
            title: 'Dashboard 6 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard6',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard6Component,
    },
    {
        path: 'dashboard7',
        data: {
            title: 'Dashboard 7 - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'dashboard7',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.Dashboard7Component,
    },
    {
        path: 'static',
        data: {
            title: 'Dashboard Static - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.StaticComponent,
    },
    {
        path: 'light',
        data: {
            title: 'Dashboard Light - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.LightComponent,
    },
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}

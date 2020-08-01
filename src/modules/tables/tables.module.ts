/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as tablesComponents from './components';

/* Containers */
import * as tablesContainers from './containers';

/* Directives */
import * as tablesDirectives from './directives';

/* Guards */
import * as tablesGuards from './guards';

/* Services */
import * as tablesServices from './services';
import { Ng1BootstrapTableComponent } from './components/ng1-bootstrap-table/ng1-bootstrap-table.component';
import { Ng2BootstrapTableComponent } from './components/ng2-bootstrap-table/ng2-bootstrap-table.component';
import { Ng3BootstrapTableComponent } from './components/ng3-bootstrap-table/ng3-bootstrap-table.component';
import { Ng4BootstrapTableComponent } from './components/ng4-bootstrap-table/ng4-bootstrap-table.component';
import { Ng5BootstrapTableComponent } from './components/ng5-bootstrap-table/ng5-bootstrap-table.component';
import { Ng6BootstrapTableComponent } from './components/ng6-bootstrap-table/ng6-bootstrap-table.component';
import { Ng7BootstrapTableComponent } from './components/ng7-bootstrap-table/ng7-bootstrap-table.component';
import { Ng8BootstrapTableComponent } from './components/ng8-bootstrap-table/ng8-bootstrap-table.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [
        DecimalPipe,
        ...tablesServices.services,
        ...tablesGuards.guards,
        ...tablesDirectives.directives,
    ],
    declarations: [
        ...tablesContainers.containers,
        ...tablesComponents.components,
        ...tablesDirectives.directives,
        Ng1BootstrapTableComponent,
        Ng2BootstrapTableComponent,
        Ng3BootstrapTableComponent,
        Ng4BootstrapTableComponent,
        Ng5BootstrapTableComponent,
        Ng6BootstrapTableComponent,
        Ng7BootstrapTableComponent,
        Ng8BootstrapTableComponent,
    ],
    exports: [...tablesContainers.containers, ...tablesComponents.components],
})
export class TablesModule {}

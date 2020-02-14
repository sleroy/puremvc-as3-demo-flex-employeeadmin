import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
* Module imports
*/
import { OrgPuremvcAs3DemosFlexEmployeeadminViewComponentsUIModule } from 'src/app/modules/org-puremvc-as3-demos-flex-employeeadmin-view-components/org-puremvc-as3-demos-flex-employeeadmin-view-components.module';
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { MxmlUIModule } from 'src/app/shared/modules/mxml/mxml.module';
import { GeneralUIModule } from 'src/app/shared/modules/general/general.module';
import { MXWFlexMxUIModule } from 'src/app/mxwmodule/flex-mx/flex-mx.module';

/**
* Definitions
*/
import {EmployeeAdmin} from './employee-admin/employee-admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
declarations: [
 AppComponent,
 EmployeeAdmin,
],
imports: [
 BrowserModule,
 OrgPuremvcAs3DemosFlexEmployeeadminViewComponentsUIModule,
 FlexMxUIModule,
 FlexSparkUIModule,
 MxmlUIModule,
 GeneralUIModule,
 MXWFlexMxUIModule,
 AppRoutingModule,
 NgbModule,
 BrowserAnimationsModule,
 BrowserModule,
 FormsModule,
 HttpClientModule,
 ReactiveFormsModule
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

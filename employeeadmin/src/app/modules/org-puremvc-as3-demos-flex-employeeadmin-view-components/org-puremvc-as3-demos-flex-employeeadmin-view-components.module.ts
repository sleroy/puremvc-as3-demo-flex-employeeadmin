import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
* Module dependencies
*/
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
import { MXWFlexMxUIModule } from 'src/app/mxwmodule/flex-mx/flex-mx.module';

/**
* Definitions
*/
import {UserForm} from './org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form/org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form.component';
import {UserList} from './org-puremvc-as3-demos-flex-employeeadmin-view-components-user-list/org-puremvc-as3-demos-flex-employeeadmin-view-components-user-list.component';
import {RolePanel} from './org-puremvc-as3-demos-flex-employeeadmin-view-components-role-panel/org-puremvc-as3-demos-flex-employeeadmin-view-components-role-panel.component';

/**
 * Definition of the module OrgPuremvcAs3DemosFlexEmployeeadminViewComponentsUIModule
 */
@NgModule({
  declarations: [
    UserForm,
    UserList,
    RolePanel,
  ],
  exports: [
    UserForm,
    UserList,
    RolePanel,
  ],
  imports: [
    // Dependencies
    CommonModule,
    NgbModule,
      FlexMxUIModule,
      MXWFlexMxUIModule,
  ]
})
export class OrgPuremvcAs3DemosFlexEmployeeadminViewComponentsUIModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
* Module dependencies
*/

/**
* Definitions
*/
import {DataGridColumn} from './mx-controls-datagridclasses-data-grid-column/mx-controls-datagridclasses-data-grid-column.component';
import {ArrayCollection} from './mx-collections-array-collection/mx-collections-array-collection.service';
import {DeptEnum} from './org-puremvc-as3-demos-flex-employeeadmin-model-enum-dept-enum/org-puremvc-as3-demos-flex-employeeadmin-model-enum-dept-enum.service';
import {RoleEnum} from './org-puremvc-as3-demos-flex-employeeadmin-model-enum-role-enum/org-puremvc-as3-demos-flex-employeeadmin-model-enum-role-enum.service';
import {UserVO} from './org-puremvc-as3-demos-flex-employeeadmin-model-vo-user-vo/org-puremvc-as3-demos-flex-employeeadmin-model-vo-user-vo.service';
import {ApplicationFacade} from './org-puremvc-as3-demos-flex-employeeadmin-application-facade/org-puremvc-as3-demos-flex-employeeadmin-application-facade.service';

/**
 * Definition of the module GeneralUIModule
 */
@NgModule({
  declarations: [
    DataGridColumn,
  ],
  exports: [
    DataGridColumn,
  ],
  imports: [
    // Dependencies
    CommonModule,
    NgbModule,
  ]
})
export class GeneralUIModule { }

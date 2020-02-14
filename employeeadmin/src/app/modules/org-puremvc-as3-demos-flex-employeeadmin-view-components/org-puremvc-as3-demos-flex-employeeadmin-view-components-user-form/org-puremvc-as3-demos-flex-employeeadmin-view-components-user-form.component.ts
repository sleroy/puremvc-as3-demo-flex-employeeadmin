import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form',
  templateUrl: './org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form.component.html',
  styleUrls: ['./org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form.component.scss']
})
export class UserForm implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  user= {
     username: ""
   };

   @Input()  DeptEnum= {
     comboList: []
   }
   ;

   submit() {

   }

   cancel() {
     
   }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-list',
  templateUrl: './flex-mx-list.component.html',
  styleUrls: ['./flex-mx-list.component.scss']
})
export class List implements OnInit {

  constructor() { }

   @Input()  change: any;
   @Input()  id: String;
   @Input()  dataProvider: any;
   @Input()  labelField: String;


  ngOnInit() {
  }

}

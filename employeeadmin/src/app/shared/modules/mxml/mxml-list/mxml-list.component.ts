import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-list',
  templateUrl: './mxml-list.component.html',
  styleUrls: ['./mxml-list.component.scss']
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

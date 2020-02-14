import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-data-grid',
  templateUrl: './mxml-data-grid.component.html',
  styleUrls: ['./mxml-data-grid.component.scss']
})
export class DataGrid implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  dataProvider: any;
   @Input()  click: String;


  ngOnInit() {
  }

}

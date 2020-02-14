import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-data-grid',
  templateUrl: './flex-mx-data-grid.component.html',
  styleUrls: ['./flex-mx-data-grid.component.scss']
})
export class DataGrid implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  dataProvider: any;
   @Input()  click: String;


  ngOnInit() {
  }

}

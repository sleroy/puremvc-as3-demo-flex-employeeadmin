import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-combo-box',
  templateUrl: './mxml-combo-box.component.html',
  styleUrls: ['./mxml-combo-box.component.scss']
})
export class ComboBox implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  dataProvider: any;
   @Input()  enabled: any;
   @Input()  labelField: String;
   @Input()  selectedIndex: any;


  ngOnInit() {
  }

}

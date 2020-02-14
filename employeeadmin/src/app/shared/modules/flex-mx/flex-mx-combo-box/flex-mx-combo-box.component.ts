import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-combo-box',
  templateUrl: './flex-mx-combo-box.component.html',
  styleUrls: ['./flex-mx-combo-box.component.scss']
})
export class ComboBox implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  dataProvider: any;
   @Input()  enabled: any;
   @Input()  labelField: String;
   @Input()  selectedIndex: any;
   @Input()  change: any;


  ngOnInit() {
  }

}

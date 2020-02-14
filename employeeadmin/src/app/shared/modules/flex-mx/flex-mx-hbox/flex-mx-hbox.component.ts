import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-hbox',
  templateUrl: './flex-mx-hbox.component.html',
  styleUrls: ['./flex-mx-hbox.component.scss']
})
export class HBox implements OnInit {

  constructor() { }

   @Input()  verticalAlign: String;
   @Input()  visible: any;
   @Input()  id: String;


  ngOnInit() {
  }

}

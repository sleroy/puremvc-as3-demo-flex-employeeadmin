import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-button',
  templateUrl: './flex-mx-button.component.html',
  styleUrls: ['./flex-mx-button.component.scss']
})
export class Button implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: String;
   @Input()  click: any;
   @Input()  enabled: any;


  ngOnInit() {
  }

}

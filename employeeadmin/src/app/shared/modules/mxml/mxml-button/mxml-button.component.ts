import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-button',
  templateUrl: './mxml-button.component.html',
  styleUrls: ['./mxml-button.component.scss']
})
export class Button implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: any;
   @Input()  click: any;
   @Input()  enabled: any;


  ngOnInit() {
  }

}

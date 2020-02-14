import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-panel',
  templateUrl: './mxml-panel.component.html',
  styleUrls: ['./mxml-panel.component.scss']
})
export class Panel implements OnInit {

  constructor() { }

   @Input()  title: String;
   @Input()  status: any;


  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-application-control-bar',
  templateUrl: './mxml-application-control-bar.component.html',
  styleUrls: ['./mxml-application-control-bar.component.scss']
})
export class ApplicationControlBar implements OnInit {

  constructor() { }

   @Input()  verticalAlign: String;
   @Input()  backgroundColor: String;
   @Input()  dock: Boolean;


  ngOnInit() {
  }

}

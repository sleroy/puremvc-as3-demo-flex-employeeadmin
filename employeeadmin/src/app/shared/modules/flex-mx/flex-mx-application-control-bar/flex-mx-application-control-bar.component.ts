import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-application-control-bar',
  templateUrl: './flex-mx-application-control-bar.component.html',
  styleUrls: ['./flex-mx-application-control-bar.component.scss']
})
export class ApplicationControlBar implements OnInit {

  constructor() { }

   @Input()  verticalAlign: String;
   @Input()  backgroundColor: String;
   @Input()  dock: Boolean;


  ngOnInit() {
  }

}

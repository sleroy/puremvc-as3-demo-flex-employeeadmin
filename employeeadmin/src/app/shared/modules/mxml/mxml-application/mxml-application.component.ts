import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-application',
  templateUrl: './mxml-application.component.html',
  styleUrls: ['./mxml-application.component.scss']
})
export class Application implements OnInit {

  constructor() { }

   @Input()  layout: String;
   @Input()  verticalAlign: String;
   @Input()  backgroundColor: String;
   @Input()  themeColor: String;
   @Input()  horizontalAlign: String;
   @Input()  pageTitle: String;
   @Input()  creationComplete: String;
   @Input()  viewSourceURL: String;
   @Input()  backgroundGradientColors: String;


  ngOnInit() {
  }

}

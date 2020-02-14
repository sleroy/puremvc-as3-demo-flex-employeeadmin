import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-control-bar',
  templateUrl: './mxml-control-bar.component.html',
  styleUrls: ['./mxml-control-bar.component.scss']
})
export class ControlBar implements OnInit {

  constructor() { }

   @Input()  horizontalAlign: String;


  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-control-bar',
  templateUrl: './flex-mx-control-bar.component.html',
  styleUrls: ['./flex-mx-control-bar.component.scss']
})
export class ControlBar implements OnInit {

  constructor() { }

   @Input()  horizontalAlign: String;


  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-panel',
  templateUrl: './flex-mx-panel.component.html',
  styleUrls: ['./flex-mx-panel.component.scss']
})
export class Panel implements OnInit {

  constructor() { }

   @Input()  title: String;
   @Input()  status: any;


  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-link-bar',
  templateUrl: './flex-mx-link-bar.component.html',
  styleUrls: ['./flex-mx-link-bar.component.scss']
})
export class LinkBar implements OnInit {

  constructor() { }

   @Input()  itemClick: String;


  ngOnInit() {
  }

}

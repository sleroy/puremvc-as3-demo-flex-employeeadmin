import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-link-bar',
  templateUrl: './mxml-link-bar.component.html',
  styleUrls: ['./mxml-link-bar.component.scss']
})
export class LinkBar implements OnInit {

  constructor() { }

   @Input()  itemClick: String;


  ngOnInit() {
  }

}

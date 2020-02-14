import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-label',
  templateUrl: './mxml-label.component.html',
  styleUrls: ['./mxml-label.component.scss']
})
export class Label implements OnInit {

  constructor() { }

   @Input()  fontWeight: String;
   @Input()  text: String;


  ngOnInit() {
  }

}

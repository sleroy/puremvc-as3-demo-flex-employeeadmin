import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-text',
  templateUrl: './mxml-text.component.html',
  styleUrls: ['./mxml-text.component.scss']
})
export class Text implements OnInit {

  constructor() { }

   @Input()  fontSize: Number;
   @Input()  fontFamily: String;
   @Input()  text: String;
   @Input()  color: String;
   @Input()  fontStyle: String;


  ngOnInit() {
  }

}

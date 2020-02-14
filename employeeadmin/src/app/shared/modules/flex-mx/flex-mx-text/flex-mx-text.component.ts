import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-text',
  templateUrl: './flex-mx-text.component.html',
  styleUrls: ['./flex-mx-text.component.scss']
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

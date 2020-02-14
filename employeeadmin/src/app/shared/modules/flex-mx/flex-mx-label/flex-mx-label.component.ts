import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-label',
  templateUrl: './flex-mx-label.component.html',
  styleUrls: ['./flex-mx-label.component.scss']
})
export class Label implements OnInit {

  constructor() { }

   @Input()  fontWeight: String;
   @Input()  text: String;


  ngOnInit() {
  }

}

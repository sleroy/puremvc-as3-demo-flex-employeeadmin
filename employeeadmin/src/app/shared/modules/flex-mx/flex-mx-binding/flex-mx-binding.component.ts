import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-binding',
  templateUrl: './flex-mx-binding.component.html',
  styleUrls: ['./flex-mx-binding.component.scss']
})
export class Binding implements OnInit {

  constructor() { }

   @Input()  destination: String;
   @Input()  source: String;


  ngOnInit() {
  }

}

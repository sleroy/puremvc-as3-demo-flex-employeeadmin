import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-binding',
  templateUrl: './mxml-binding.component.html',
  styleUrls: ['./mxml-binding.component.scss']
})
export class Binding implements OnInit {

  constructor() { }

   @Input()  destination: String;
   @Input()  source: String;


  ngOnInit() {
  }

}

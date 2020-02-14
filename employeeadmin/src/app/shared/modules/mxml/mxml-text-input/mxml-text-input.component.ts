import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-text-input',
  templateUrl: './mxml-text-input.component.html',
  styleUrls: ['./mxml-text-input.component.scss']
})
export class TextInput implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  text: any;


  ngOnInit() {
  }

}

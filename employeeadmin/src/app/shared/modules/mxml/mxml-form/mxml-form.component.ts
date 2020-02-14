import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-form',
  templateUrl: './mxml-form.component.html',
  styleUrls: ['./mxml-form.component.scss']
})
export class Form implements OnInit {

  constructor() { }

   @Input()  enabled: any;


  ngOnInit() {
  }

}

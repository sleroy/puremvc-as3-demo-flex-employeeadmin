import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'mxml-form-item',
  templateUrl: './mxml-form-item.component.html',
  styleUrls: ['./mxml-form-item.component.scss']
})
export class FormItem implements OnInit {

  constructor() { }

   @Input()  label: String;


  ngOnInit() {
  }

}

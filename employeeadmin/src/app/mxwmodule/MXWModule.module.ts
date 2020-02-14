import { MXWFlexSparkUIModule } from 'src/app/mxwmodule/flex-spark/flex-spark.module';
import { MXWFlexMxUIModule } from 'src/app/mxwmodule/flex-mx/flex-mx.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [

  ],
  exports: [

    MXWFlexMxUIModule,
    MXWFlexSparkUIModule
  ],
  imports: [
    CommonModule,
    NgbModule,
    MXWFlexMxUIModule,
    MXWFlexSparkUIModule
  ]
})
export class MXWUIModule { }

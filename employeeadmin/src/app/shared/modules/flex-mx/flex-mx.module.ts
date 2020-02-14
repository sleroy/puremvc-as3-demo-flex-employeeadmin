import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
* Module dependencies
*/

/**
* Definitions
*/
import {Panel} from './flex-mx-panel/flex-mx-panel.component';
import {LinkBar} from './flex-mx-link-bar/flex-mx-link-bar.component';
import {String} from './flex-mx-string/flex-mx-string.component';
import {VBox} from './flex-mx-vbox/flex-mx-vbox.component';
import {columns} from './flex-mx-columns/flex-mx-columns.component';
import {Text} from './flex-mx-text/flex-mx-text.component';
import {DataGrid} from './flex-mx-data-grid/flex-mx-data-grid.component';
import {ApplicationControlBar} from './flex-mx-application-control-bar/flex-mx-application-control-bar.component';
import {Button} from './flex-mx-button/flex-mx-button.component';
import {Metadata} from './flex-mx-metadata/flex-mx-metadata.component';
import {Application} from './flex-mx-application/flex-mx-application.component';
import {HBox} from './flex-mx-hbox/flex-mx-hbox.component';
import {Binding} from './flex-mx-binding/flex-mx-binding.component';
import {ComboBox} from './flex-mx-combo-box/flex-mx-combo-box.component';
import {Label} from './flex-mx-label/flex-mx-label.component';
import {dataProvider} from './flex-mx-data-provider/flex-mx-data-provider.component';
import {List} from './flex-mx-list/flex-mx-list.component';
import {ControlBar} from './flex-mx-control-bar/flex-mx-control-bar.component';
import {Script} from './flex-mx-script/flex-mx-script.component';

/**
 * Definition of the module FlexMxUIModule
 */
@NgModule({
  declarations: [
    Panel,
    LinkBar,
    String,
    VBox,
    columns,
    Text,
    DataGrid,
    ApplicationControlBar,
    Button,
    Metadata,
    Application,
    HBox,
    Binding,
    ComboBox,
    Label,
    dataProvider,
    List,
    ControlBar,
    Script,
  ],
  exports: [
    Panel,
    LinkBar,
    String,
    VBox,
    columns,
    Text,
    DataGrid,
    ApplicationControlBar,
    Button,
    Metadata,
    Application,
    HBox,
    Binding,
    ComboBox,
    Label,
    dataProvider,
    List,
    ControlBar,
    Script,
  ],
  imports: [
    // Dependencies
    CommonModule,
    NgbModule,
  ]
})
export class FlexMxUIModule { }

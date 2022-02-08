import {IonicModule} from "@ionic/angular";
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "./modal/modal.component";

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ComponentsModule {}

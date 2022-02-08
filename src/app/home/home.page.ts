import { Component } from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {ModalComponent} from "../components/modal/modal.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController,
  ) {}

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      mode:"ios",
      backdropDismiss:true,
      componentProps: {
        isModal: true
      }
    });
    return await modal.present();
  }

}

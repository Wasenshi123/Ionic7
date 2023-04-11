import { ModalContentComponent } from './../modal-content/modal-content.component';
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private modal: ModalController) {}

  async open() {
    const page = await this.modal.create({
      component: ModalContentComponent,
      componentProps: {
        myModel: {
          name: 'My Name',
          title: 'Mock'
        } as DataModel
      }
    });
    page.present();
  }
}

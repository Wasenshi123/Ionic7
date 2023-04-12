import { ModalContentComponent } from './../modal-content/modal-content.component';
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DataModel } from '../data-model';
import { ModalContentModule } from '../modal-content/modal-content.module';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ModalContentModule],
})
export class Tab1Page {
  constructor(private modalService: ModalService) {}

  async open() {
    const page = await this.modalService.openModal(ModalContentComponent, {
      myModel: {
        title: 'Mock'
      },
    });
    page.present();
  }
}

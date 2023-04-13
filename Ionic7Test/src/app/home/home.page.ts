import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalContentModule } from '../modal-content/modal-content.module';
import { ModalBaseModule } from '../modal-base/modal-base.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ModalContentModule, ModalBaseModule],
})
export class HomePage {
  constructor(private modalService: ModalService) {}

  async open() {
    const modal = await this.modalService.openModal(ModalContentComponent, {
      myModel: {
        title: 'Mock'
      }
    });


  }
}

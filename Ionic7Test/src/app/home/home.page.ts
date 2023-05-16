import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalContentModule } from '../modal-content/modal-content.module';
import { ModalBaseModule } from '../modal-base/modal-base.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ModalContentModule, ModalBaseModule],
})
export class HomePage {

  constructor(private modalService: ModalService) {}

  async open() {
    const data = Array(4).fill(null).map((v, i) => ( { title: 'title' + i, name: 'name' + i  } as DataModel ));

    const modal = await this.modalService.openModal(ModalContentComponent, {
      mylist: data
    });
  }
}

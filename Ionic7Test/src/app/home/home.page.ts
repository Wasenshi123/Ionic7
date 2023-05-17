import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { Data, ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalContentModule } from '../modal-content/modal-content.module';
import { ModalBaseModule } from '../modal-base/modal-base.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    const mylist = Array(10).fill(null).map((n, i) => {
      return { id: i, value: i, displayName: 'Test' + i } as Data;
    });

    const data = { optionList: mylist };
    const modal = await this.modalService.openModal(ModalContentComponent, { mydata: data});
  }
}

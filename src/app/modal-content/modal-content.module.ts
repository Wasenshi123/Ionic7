import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContentComponent } from './modal-content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ModalContentComponent],
})
export class ModalContentModule {}

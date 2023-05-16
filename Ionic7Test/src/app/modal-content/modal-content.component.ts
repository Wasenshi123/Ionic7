import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  
  @Input()
  mylist: DataModel[] = [];

  selects: boolean[] = [];

  constructor(private modal: ModalController) {}

  ngOnInit() {
    console.log(this.mylist);
  }
}

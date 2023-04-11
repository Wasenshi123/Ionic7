import { Component, OnInit, Input } from '@angular/core';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent  implements OnInit {

  @Input()
  myModel!: DataModel;

  constructor() { }

  ngOnInit() {}

}

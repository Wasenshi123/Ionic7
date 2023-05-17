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
  mylist!: Data[];

  isValueType = true;
  isText = false;

  yesLabel: string = '';
  noLabel: string = '';
  textLabel: string = '';
  numberLabel: string = '';

  constructor(private modal: ModalController) {}

  ngOnInit() {
    
  }


  trackOption(index: number, item: Data) {
    return item.id ?? (item as any).tmpId;
  }

  addNew() {
    const newId = this.mylist.length + 1;
    this.mylist.push({ id: newId, displayName: 'New'+newId, value: newId } as Data);
  }

  swap(first: Data, second: Data) {
    if (!second || !first) {
      return;
    }

    const list = this.mylist;
    const firstIndex = list.findIndex(x => x.id === first.id);
    const secondIndex = list.findIndex(x => x.id === second.id);
    [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
  }

  save() {
    // mock function
  }

}

export interface Data {
  id: number;
  name: string;
  displayName: string;
  value?: number;
  textValue?: string;

  order: number;
}

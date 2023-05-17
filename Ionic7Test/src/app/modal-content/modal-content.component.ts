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
  mydata!: { optionList: Data[]; };

  isValueType = true;
  isText = false;

  yesLabel: string = '';
  noLabel: string = '';
  textLabel: string = '';
  numberLabel: string = '';

  constructor(private modal: ModalController) {}

  ngOnInit() {
    
  }

  initReadAssessment() {
    const yesIndex = this.mydata.optionList.findIndex(x => x.name === "yesLabel");
    if (yesIndex > -1) {
      this.yesLabel = this.mydata.optionList[yesIndex].displayName;
      this.mydata.optionList.splice(yesIndex, 1);
    }
    const noIndex = this.mydata.optionList.findIndex(x => x.name === "noLabel");
    if (noIndex > -1) {
      this.noLabel = this.mydata.optionList[noIndex].displayName;
      this.mydata.optionList.splice(noIndex, 1);
    }

    const textIndex = this.mydata.optionList.findIndex(x => x.name == "textLabel");
    if (textIndex > -1) {
      this.textLabel = this.mydata.optionList[textIndex].displayName;
      this.mydata.optionList.splice(textIndex, 1);
    }

    const numberIndex = this.mydata.optionList.findIndex(x => x.name == "numberLabel");
    if (numberIndex > -1) {
      this.numberLabel = this.mydata.optionList[numberIndex].displayName;
      this.mydata.optionList.splice(numberIndex, 1);
    }
  }


  trackOption(index: number, item: Data) {
    return item.id ?? (item as any).tmpId;
  }

  addNew() {
    const newId = this.mydata.optionList.length + 1;
    this.mydata.optionList.push({ id: newId, displayName: 'New'+newId, value: newId } as Data);
  }

  swap(first: Data, second: Data) {
    if (!second || !first) {
      return;
    }
    console.log(second);
    console.log(first);

    const list = this.mydata.optionList;
    const firstIndex = list.findIndex(x => x.id === first.id);
    const secondIndex = list.findIndex(x => x.id === second.id);
    [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
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

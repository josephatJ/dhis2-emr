import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-render-custom-form',
  templateUrl: './render-custom-form.component.html',
  styleUrls: ['./render-custom-form.component.css']
})
export class RenderCustomFormComponent implements OnInit {
  @Input() stageId: string;
  @Input() clientId: string; // =ou
  @Input() programId: string;
  @Input() programStageMetadata: any;
  formType = 'tracker';
  dataElements: any;
  elementsDataValues: any = {};
  statusArr = [];
  statusUpdateOnDomElement = {
    colorKey: 'WAIT',
    domElementId: 'VdOajI8PwGd-RXDbRXHscFp-val',
    id: 'RXDbRXHscFp-dataElement',
    status: 'not-synced',
    value: '333'
  };
  constructor() {}

  ngOnInit(): void {
    this.dataElements = this.getDataElements(
      this.programStageMetadata['programStageDataElements']
    );

    // this.elementsDataValues[dataConfigs['id'] + '-dataElement'];
  }

  getDataElements(programStageDataElements) {
    let formattedDataElements = [];
    _.map(programStageDataElements, PStageDataElement => {
      formattedDataElements.push(PStageDataElement.dataElement);
    });
    return formattedDataElements;
  }

  detailsOfTheChangedValue(e) {
    console.log(e);
    const domElementId = e.domElementId;
    this.statusUpdateOnDomElement.domElementId = e.domElementId;
    this.statusUpdateOnDomElement.id = e.id;
    this.statusUpdateOnDomElement.colorKey = 'OK';
    this.statusUpdateOnDomElement.status = 'synched';
    this.statusUpdateOnDomElement.value = e.value;
    const newObject = {};
    newObject[domElementId] = this.statusUpdateOnDomElement;
    this.statusArr.push(this.statusUpdateOnDomElement);
    console.log('statusUpdateOnDomElement', this.statusUpdateOnDomElement);
    // this.entryInfo.emit(this.statusUpdateOnDomElement);
  }
}

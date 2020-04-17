import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render-reporting-rates',
  templateUrl: './render-reporting-rates.component.html',
  styleUrls: ['./render-reporting-rates.component.css']
})
export class RenderReportingRatesComponent implements OnInit {
  @Input() visualizationLayers: any;
  page: number = 1;
  itemsPerPage: number = 5;
  constructor() {}

  ngOnInit(): void {
    console.log('visualizationLayers', this.visualizationLayers);
  }

  onUpdatePageSize(e) {
    this.itemsPerPage = e;
  }
  onCurrentPageUpdate(e) {
    this.page = e;
  }
}

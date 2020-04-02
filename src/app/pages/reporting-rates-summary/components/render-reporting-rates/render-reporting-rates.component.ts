import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render-reporting-rates',
  templateUrl: './render-reporting-rates.component.html',
  styleUrls: ['./render-reporting-rates.component.css']
})
export class RenderReportingRatesComponent implements OnInit {
  @Input() analytics: any;
  constructor() {}

  ngOnInit(): void {}
}
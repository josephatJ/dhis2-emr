import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  @Input() ouDistributionAnalytics: any;
  constructor() {}

  ngOnInit(): void {}
}

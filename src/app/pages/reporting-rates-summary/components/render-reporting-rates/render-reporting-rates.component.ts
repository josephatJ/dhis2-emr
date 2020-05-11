import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { formatAnalyticsForDataTable } from '../../helpers';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-render-reporting-rates',
  templateUrl: './render-reporting-rates.component.html',
  styleUrls: ['./render-reporting-rates.component.css']
})
export class RenderReportingRatesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() visualizationLayers: any;
  displayedColumns: string[];
  dataSource: any;
  headersReferences: any;
  constructor() {}

  ngOnInit(): void {
    const formattedData = formatAnalyticsForDataTable(
      this.visualizationLayers[0]['analytics']['rows'],
      this.visualizationLayers[0]['analytics']['headers']
    );
    this.displayedColumns = formattedData['columns'];
    this.dataSource = new MatTableDataSource(formattedData['data']);
    this.headersReferences = formattedData['headersReferences'];
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

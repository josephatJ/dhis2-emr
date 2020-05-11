import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { formatOuDistributionForDataTable } from '../../helpers/format-org-unit-distribution-for-datatable.helper';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  @Input() ouDistributionAnalytics: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[];
  dataSource: any;
  headersReferences: any;
  constructor() {}

  ngOnInit(): void {
    const formattedData = formatOuDistributionForDataTable(
      this.ouDistributionAnalytics['rows'],
      this.ouDistributionAnalytics['headers']
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

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { formatReportsForDataTable } from '../../helpers/format-list-of-reports-for-datatable.helper';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() reports: Array<any>;
  @Input() currentUser: any;
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource: any;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      formatReportsForDataTable(this.reports)
    );
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

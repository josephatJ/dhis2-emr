import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  formatPatientsList,
  getMaxIdForNewCustomer
} from '../../helpers/patients-list.helper';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() customers: any;
  @Input() systemAttributes: any;
  currentCustomerId: string;
  newPatientSet: boolean = false;
  displayedColumns: string[] = [
    'no',
    'internalPatientId',
    'firstName',
    'middleName',
    'lastName',
    'phone',
    'dob',
    'action'
  ];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      formatPatientsList(this.customers, this.systemAttributes)
    );
    this.dataSource.paginator = this.paginator;
    this.currentCustomerId = getMaxIdForNewCustomer(this.customers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewPatient() {
    this.newPatientSet = !this.newPatientSet;
  }

  viewCustomer(uid) {
    console.log(uid);
  }
}

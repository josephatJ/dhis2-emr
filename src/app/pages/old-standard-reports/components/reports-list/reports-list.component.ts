import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() reports: Array<any>;
  @Input() currentUser: any;
  page: number = 1;
  itemsPerPage: number = 10;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onUpdatePageSize(e) {
    this.itemsPerPage = e;
  }
  onCurrentPageUpdate(e) {
    this.page = e;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  @Input() resources: Array<any>;
  @Input() currentUser: any;
  page: number = 1;
  itemsPerPage: number = 10;
  constructor() {}

  ngOnInit(): void {}

  onUpdatePageSize(e) {
    this.itemsPerPage = e;
  }
  onCurrentPageUpdate(e) {
    this.page = e;
  }
}

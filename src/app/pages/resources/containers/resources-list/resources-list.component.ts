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

  openResource(document) {
    if (document.external) {
      window.open(document.url, '_blank');
    } else {
      window.open('../../../api/documents/' + document.id + '/data', '_blank');
    }
  }
}

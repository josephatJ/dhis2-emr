import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSelection } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageEvent: any;
  selectionFilterConfig = {
    showDataFilter: false,
    disableDataFilter: true,
    showValidationRuleGroupFilter: false,
    disableValidationRuleGroupFilter: true
  };

  reports = [
    { name: 'report1', id: 'xyz1' },
    { name: 'report2', id: 'xyz2' },
    { name: 'report3', id: 'xyz3' },
    { name: 'report4', id: 'xyz4' },
    { name: 'report5', id: 'xyz5' },
    { name: 'report6', id: 'xyz6' }
  ];

  dataSelections = [];

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  onFilterUpdateAction(filterSelections) {
    console.log('event logged ::: ', filterSelections);

    if (filterSelections.length == 2) {
      this.store.dispatch(
        updateSelection({
          Selection: {
            orgUnit: filterSelections[1].items[0].id,
            period: filterSelections[0].items[0].id
          }
        })
      );
    }
  }
}

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

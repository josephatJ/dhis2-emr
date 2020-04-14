import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadOrgUnitsGroupSets, loadOuWithChildren } from '../../store/actions';
import {
  getOrgUnitsGroupSets,
  getOuWithChildrenById
} from '../../store/selectors/org-units-group-sets.selectors';
import { getCurrentUser } from 'src/app/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orgUnitFilterConfig: any = {
    singleSelection: true,
    showUserOrgUnitSection: false,
    showOrgUnitLevelGroupSection: false,
    showOrgUnitGroupSection: false,
    showOrgUnitLevelSection: false,
    reportUse: false,
    additionalQueryFields: [],
    batchSize: 400
  };
  selectedOrgUnitItems: Array<any> = [];
  currentUser$: Observable<any>;
  orgUnitsGroupSets$: Observable<any>;
  selectedOrgUnitsGroupSet: any;
  orgUnitFilterSet: boolean = false;
  filterSelections: any = {};
  ouWithChildren$: Observable<any>;
  filterChanged: boolean = false;
  selectedOu: any;
  constructor(private store: Store<State>) {
    this.currentUser$ = this.store.select(getCurrentUser);
    this.store.dispatch(loadOrgUnitsGroupSets());
  }

  ngOnInit(): void {
    this.orgUnitsGroupSets$ = this.store.select(getOrgUnitsGroupSets);
  }
  getOrgUnitsGroupSet(id) {
    this.filterChanged = false;
    if (id != '') {
      this.orgUnitFilterSet = false;
      this.selectedOrgUnitsGroupSet = id;
      this.filterSelections['ouGroupSet'] = { id: id };
      this.orgUnitFilterSet = false;
      setTimeout(() => {
        this.filterChanged = true;
      }, 100);
    }
  }
  onFilterUpdate(selection, type) {
    this.orgUnitFilterSet = !this.orgUnitFilterSet;
    this.selectedOrgUnitItems = selection['items'];
    this.filterSelections['ou'] = selection['items'][0];
    this.selectedOu = selection['items'][0];
    this.store.dispatch(
      loadOuWithChildren({ ou: this.filterSelections['ou']['id'] })
    );
    this.orgUnitFilterSet = false;
    this.filterChanged = false;
    this.ouWithChildren$ = this.store.select(getOuWithChildrenById, {
      id: this.filterSelections['ou']['id']
    });
    setTimeout(() => {
      this.filterChanged = true;
    }, 100);
  }
  onFilterClose(selection, type) {
    this.orgUnitFilterSet = false;
  }

  toggleOrgUnitFilter(e) {
    e.stopPropagation();
    this.orgUnitFilterSet = !this.orgUnitFilterSet;
  }
}

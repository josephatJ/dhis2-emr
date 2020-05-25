import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { getAllPatients } from '../../store/selectors/patients-as-ous.selectors';
import { getCurrentUser } from 'src/app/store/selectors';
import {
  getSystemAttributesEntities,
  getSystemAttributesLoadedState
} from '../../store/selectors/system-attributes.selectors';

@Component({
  selector: 'app-patients-finder',
  templateUrl: './patients-finder.component.html',
  styleUrls: ['./patients-finder.component.css']
})
export class PatientsFinderComponent implements OnInit {
  currentUser$: Observable<any>;
  patients$: Observable<any>;
  systemAttributes$: Observable<any>;
  systemAttributesLoadedState$: Observable<any>;
  constructor(private store: Store<State>) {
    this.patients$ = this.store.select(getAllPatients);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.systemAttributes$ = this.store.select(getSystemAttributesEntities);
    this.systemAttributesLoadedState$ = this.store.select(
      getSystemAttributesLoadedState
    );
  }

  ngOnInit(): void {}
}

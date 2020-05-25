import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  getCustomerById,
  getCustomersLoadedState,
  getFacility
} from '../../store/selectors/patients-as-ous.selectors';
import {
  getSystemAttributesEntities,
  getSystemAttributesLoadedState
} from '../../store/selectors/system-attributes.selectors';
import { getProgramDetailsById } from '../../store/selectors/programs.selectors';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  customer$: Observable<any>;
  currentCustomerId: string;
  systemAttributes$: Observable<any>;
  systemAttributesLoadedState$: Observable<boolean>;
  customersLoadedState$: Observable<boolean>;
  facility$: Observable<any>;
  customerInfoProgramId: string = 'K1QeifE9L7Q';
  customerInfoProgram$: Observable<any>;
  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentCustomerId = this.route.snapshot.params['id'];
    this.customer$ = this.store.select(getCustomerById, {
      id: this.currentCustomerId
    });
    this.systemAttributes$ = this.store.select(getSystemAttributesEntities);
    this.systemAttributesLoadedState$ = this.store.select(
      getSystemAttributesLoadedState
    );
    this.customersLoadedState$ = this.store.select(getCustomersLoadedState);
    this.facility$ = this.store.select(getFacility);
    this.customerInfoProgram$ = this.store.select(getProgramDetailsById, {
      id: this.customerInfoProgramId
    });
  }
}

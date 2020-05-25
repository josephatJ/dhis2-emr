import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../../services/customer-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getAllPatients } from '../../store/selectors/patients-as-ous.selectors';
import { getCurrentUser } from 'src/app/store/selectors';
import {
  getSystemAttributesEntities,
  getSystemAttributesLoadedState
} from '../../store/selectors/system-attributes.selectors';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  systemId$: Observable<any>;
  customers$: Observable<any>;
  currentUser$: Observable<any>;
  systemAttributes$: Observable<any>;

  facilityId: string = 'geZkVaZQpX1';
  systemAttributesLoadedState$: Observable<any>;
  constructor(
    private customerDataService: CustomerDataService,
    private store: Store<State>
  ) {
    this.customers$ = this.store.select(getAllPatients);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.systemAttributes$ = this.store.select(getSystemAttributesEntities);
    this.systemAttributesLoadedState$ = this.store.select(
      getSystemAttributesLoadedState
    );
  }

  ngOnInit(): void {
    this.systemId$ = this.customerDataService.getUID();
  }
}

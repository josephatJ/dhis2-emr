import { Component, OnInit, Input } from '@angular/core';
import { sanitizeCustomerProfileBasicDetails } from '../../helpers/sanitize-customer-profile.helper';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadTrackedEntityInstance } from '../../store/actions';

@Component({
  selector: 'app-customer-profile-details',
  templateUrl: './customer-profile-details.component.html',
  styleUrls: ['./customer-profile-details.component.css']
})
export class CustomerProfileDetailsComponent implements OnInit {
  @Input() facility: any;
  @Input() customer: any;
  @Input() systemAttributes: any;
  programId: string = 'K1QeifE9L7Q';
  customerBasicDetails: any;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.customerBasicDetails = sanitizeCustomerProfileBasicDetails(
      this.customer,
      this.systemAttributes
    );
    this.store.dispatch(
      loadTrackedEntityInstance({
        dimensions: { ou: this.customer.id, program: this.programId }
      })
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { sanitizeCustomerProfileBasicDetails } from '../../helpers/sanitize-customer-profile.helper';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  loadTrackedEntityInstance,
  loadProgramStageMetadata
} from '../../store/actions';

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
  visitsStageId: string = 'z5WWDiAbnFr';
  customerBasicDetails: any;
  isEncounterOpened: boolean = false;
  encounterText: string = 'Add encounter (New visit)';
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

  setEncounter() {
    this.store.dispatch(
      loadProgramStageMetadata({ stageId: this.visitsStageId })
    );
    this.isEncounterOpened = !this.isEncounterOpened;
    if (this.isEncounterOpened) {
      this.encounterText = 'Back';
    }
  }
}

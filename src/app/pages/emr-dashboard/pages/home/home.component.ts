import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  loadSystemAttributes,
  loadOuChildrenAsPatients,
  loadPrograms
} from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facilityId: string = 'geZkVaZQpX1';
  programDetails: string[] = ['K1QeifE9L7Q', 'MQ0FhPBjAbG'];
  constructor(private store: Store<State>) {
    this.store.dispatch(loadSystemAttributes());
    this.store.dispatch(loadOuChildrenAsPatients({ ouId: this.facilityId }));
    this.store.dispatch(loadPrograms({ programsIds: this.programDetails }));
  }

  ngOnInit(): void {}
}

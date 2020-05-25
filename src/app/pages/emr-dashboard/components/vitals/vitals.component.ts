import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { getTrackedEntityInstancesByOu } from '../../store/selectors/clients-data.selectors';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  @Input() clientId: string;
  @Input() programId: string;
  trackedEntityInstance$: Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.trackedEntityInstance$ = this.store.select(
      getTrackedEntityInstancesByOu,
      { orgUnit: this.clientId }
    );
  }
}

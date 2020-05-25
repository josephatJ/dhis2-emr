import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getTrackedEntityInstancesByOu,
  getProgramStageLoadedState,
  getProgramStageMetadataByStageId
} from '../../store/selectors/clients-data.selectors';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {
  @Input() clientId: string;
  @Input() programId: string;
  @Input() visitsStageId: string;
  trackedEntityInstance$: Observable<any>;
  programStageMetaData$: Observable<any>;
  programStageLoaded$: Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.trackedEntityInstance$ = this.store.select(
      getTrackedEntityInstancesByOu,
      { orgUnit: this.clientId }
    );
    this.programStageLoaded$ = this.store.select(getProgramStageLoadedState);
    this.programStageMetaData$ = this.store.select(
      getProgramStageMetadataByStageId,
      { id: this.visitsStageId }
    );
  }

  newVisit() {
    // API: events
    const events = {
      events: [
        {
          dataValues: [
            {
              value: 'false',
              dataElement: 'NLAJAEoSqsH'
            },
            {
              value: 'true',
              dataElement: 'mBVA36fGaTU'
            },
            {
              value: 'false',
              dataElement: 'caipsJsduGk'
            },
            {
              value: 1,
              dataElement: 'GEBbXQxmHVI'
            }
          ],
          program: 'K1QeifE9L7Q',
          programStage: 'z5WWDiAbnFr',
          orgUnit: 'p1xBkCImBgo',
          trackedEntityInstance: 'kKlU195QYEg',
          status: 'ACTIVE',
          dueDate: '2020-05-01',
          eventDate: '2020-05-01'
        }
      ]
    };
  }
}

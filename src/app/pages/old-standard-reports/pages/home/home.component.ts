import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { loadStdReportsList } from '../../store/actions';
import { getOldReportsList } from '../../store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reportsList$: Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadStdReportsList());
    this.reportsList$ = this.store.select(getOldReportsList);
  }
}

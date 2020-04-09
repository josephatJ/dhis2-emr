import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { loadReportMetadata } from '../../store/actions';
import { Observable } from 'rxjs';
import { getOldReportMetadataByReportId } from '../../store/selectors';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportMetadata$: Observable<any>;
  filterSelections: any;
  selectionChanged: boolean = false;
  selectionFilterConfig: any = {
    showDataFilter: false,
    showPeriodFilter: true,
    showOrgUnitFilter: true,
    showLayout: false,
    showFilterButton: false,
    orgUnitFilterConfig: {
      singleSelection: true,
      showUserOrgUnitSection: false,
      showOrgUnitLevelGroupSection: false,
      showOrgUnitGroupSection: false,
      showOrgUnitLevelSection: false,
      reportUse: false,
      additionalQueryFields: [],
      batchSize: 400
    }
  };
  selectedOrgUnitItems: Array<any> = [];
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadReportMetadata({ reportId: this.route.snapshot.params.id })
    );
    this.reportMetadata$ = this.store.select(getOldReportMetadataByReportId, {
      id: this.route.snapshot.params.id
    });
  }

  onFilterUpdate(selections) {
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectionChanged = true;
    }, 100);
    this.filterSelections = selections;
  }
}

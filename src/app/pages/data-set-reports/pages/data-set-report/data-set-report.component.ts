import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataSetReportsService } from '../../services/data-set-reports.service';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { evaluateIndicatorFormula } from '../../helpers/evaluate-indicator-expressions.helper';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDataSets, loadDataSetDimensions } from '../../store/actions';
import { getCurrentUser } from 'src/app/store/selectors';
import { getLoadedDataSets } from '../../store/selectors';
import { getDataSetDimensionsByDataSetId } from '../../store/selectors/datasets-dimensions.selectors';

@Component({
  selector: 'app-data-set-report',
  templateUrl: './data-set-report.component.html',
  styleUrls: ['./data-set-report.component.css']
})
export class DataSetReportComponent implements OnInit, AfterViewInit {
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
  dataSetReport$: Observable<any>;
  isReportSet: boolean = false;
  report: any;
  safeReportHtml: SafeHtml;
  filterSelections: Array<any> = [];
  selectionChanged$: Subject<any> = new Subject();
  selectionChanged: boolean = false;
  currentUser$: Observable<any>;
  dataSets$: Observable<any>;
  dataSetId: string;
  dataSetDimensions$: Observable<any>;
  constructor(private sanitizer: DomSanitizer, private store: Store<State>) {
    this.currentUser$ = this.store.select(getCurrentUser);
    this.currentUser$.subscribe(currentUser => {
      if (currentUser) {
        this.store.dispatch(loadDataSets({ currentUser }));
      }
    });
  }

  ngOnInit(): void {
    this.dataSets$ = this.store.select(getLoadedDataSets);
    this.selectionChanged = true;
  }

  getDataSet(dataSetId) {
    this.dataSetId = dataSetId;
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectionChanged = true;
    }, 100);
  }

  getDataSetDimension(dimensionId) {
    console.log('dimension', dimensionId);
  }

  ngAfterViewInit() {
    try {
      this.setScriptsOnHtmlContent(this.getScriptsContents(this.report));

      evaluateIndicatorFormula();
    } catch (e) {
      console.log('ng after view int ' + JSON.stringify(e));
    }
  }

  showDataSetsSelection() {}

  setScriptsOnHtmlContent(scripts) {
    const scriptsContents = `
          try {${scripts.join('')}} catch(e) { console.log(e);}`;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = scriptsContents;
    document.getElementById(`data_set_report_id`).appendChild(script);
  }

  getScriptsContents(html) {
    const matchedScriptArray = html.match(
      /<script[^>]*>([\w|\W]*)<\/script>/im
    );

    const scripts =
      matchedScriptArray && matchedScriptArray.length > 0
        ? matchedScriptArray[0]
            .replace(/(<([^>]+)>)/gi, ':separator:')
            .split(':separator:')
            .filter(content => content.length > 0)
        : [];
    return _.filter(scripts, (scriptContent: string) => scriptContent !== '');
  }

  onFilterUpdate(selections) {
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectionChanged = true;
    }, 100);
    this.filterSelections = selections;
  }
}

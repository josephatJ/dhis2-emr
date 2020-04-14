import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { formulateOuDimensions } from '../../helpers/create-ou-distribution-dimensions.helper';
import { loadOrgUnitsDistributionData } from '../../store/actions';
import { Observable } from 'rxjs';
import { getOrgUnitDistributionById } from '../../store/selectors/org-unit-distribution.selectors';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() filterSelections: any;
  @Input() currentUser: any;
  @Input() ouWithChildren: any;
  dimensions: any;
  orgUnitDistributionEntity$: Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.dimensions = formulateOuDimensions(
      this.ouWithChildren,
      this.filterSelections
    );
    this.store.dispatch(
      loadOrgUnitsDistributionData({ ouDimensions: this.dimensions })
    );
    this.orgUnitDistributionEntity$ = this.store.select(
      getOrgUnitDistributionById,
      {
        id:
          this.dimensions.ous.join('-') + '-' + this.dimensions.distributionType
      }
    );
  }
}

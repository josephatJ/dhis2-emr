import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interactive-report',
  templateUrl: './interactive-report.component.html',
  styleUrls: ['./interactive-report.component.css']
})
export class InteractiveReportComponent implements OnInit {
  @Input() reportId: string;
  @Input() reportTemplate;
  @Input() filterSelections: any;
  htmlTemplate$: Observable<any>;
  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.htmlTemplate$ = this.reportsService.getReportTemplate(this.reportId);
  }
}

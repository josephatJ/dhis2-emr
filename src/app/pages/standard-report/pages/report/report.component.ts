import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  id: string;
  htmlTemplate: SafeHtml;
  customElements: any;
  reportRendered: Boolean = false;
  htmlTemplate$: Observable<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private reportsService: ReportsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.htmlTemplate$ = this.reportsService.getReportTemplate(this.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  id: string;
  htmlTemplate: string;

  constructor(
    private reportsService: ReportsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.reportsService.getReportTemplate(this.id).subscribe(
      reportTemplate => {
        console.log(reportTemplate);
        this.htmlTemplate = reportTemplate.htmlString;

        this.getElemsForAnalytics();
      },
      error => {
        //handle request error
      }
    );
  }

  getElemsForAnalytics() {
    console.log(document.getElementsByClassName('custom-elem'));
  }
}

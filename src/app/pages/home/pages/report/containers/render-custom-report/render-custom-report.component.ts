import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { getElementDetails } from 'src/app/core/helpers/htmlHelpers';

@Component({
  selector: 'app-render-custom-report',
  templateUrl: './render-custom-report.component.html',
  styleUrls: ['./render-custom-report.component.css']
})
export class RenderCustomReportComponent implements OnInit {
  @Input() htmlCodes: any;

  htmlCodes_: SafeHtml;
  arrayForAnalytics: Array<{}>;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    try {
      this.htmlCodes_ = this.sanitizer.bypassSecurityTrustHtml(this.htmlCodes);
    } catch (e) {
      console.log('ng on init ' + JSON.stringify(e));
    }
  }

  ngAfterViewInit() {
    try {
      this.arrayForAnalytics = getElementDetails();
    } catch (e) {}
  }
}

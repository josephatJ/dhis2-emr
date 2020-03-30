import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import * as _ from 'lodash';
import { evaluateIndicatorFormula } from '../../helpers/evaluate-indicator-expressions.helper';

@Component({
  selector: 'app-render-data-set-report',
  templateUrl: './render-data-set-report.component.html',
  styleUrls: ['./render-data-set-report.component.css']
})
export class RenderDataSetReportComponent implements OnInit, AfterViewInit {
  @Input() reportHtml: any;
  safeReportHtml: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    try {
      this.safeReportHtml = this.sanitizer.bypassSecurityTrustHtml(
        this.reportHtml
      );
    } catch (e) {
      console.log('ng on init ' + JSON.stringify(e));
    }
  }

  ngAfterViewInit() {
    try {
      this.setScriptsOnHtmlContent(this.getScriptsContents(this.reportHtml));

      evaluateIndicatorFormula();
    } catch (e) {
      console.log('ng after view int ' + JSON.stringify(e));
    }
  }

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
    console.log('gsgsgsgs');
    return _.filter(scripts, (scriptContent: string) => scriptContent !== '');
  }
}

import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { formatDataDimensionsSelections } from '../../helpers/filter-selections.helper';

@Component({
  selector: 'app-render-report',
  templateUrl: './render-report.component.html',
  styleUrls: ['./render-report.component.css']
})
export class RenderReportComponent implements OnInit, AfterViewInit {
  @Input() reportHtml: any;
  @Input() filterSelections: any;
  orgUnit: any;
  period: any;
  htmlCodes: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    try {
      this.htmlCodes = this.sanitizer.bypassSecurityTrustHtml(this.reportHtml);
    } catch (error) {
      //console.log(error);
    }
    var iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.setAttribute('id', 'iframe_id');
    iframe.setAttribute(
      'onload',
      'this.height=this.contentWindow.document.body.scrollHeight;'
    );
    var ctnr = document.getElementById('html_id');
    ctnr.appendChild(iframe);
    iframe.contentWindow.document.open('text/htmlreplace');
    iframe.contentWindow.document.write(this.reportHtml);
    iframe.contentWindow['iReportsDimensions'] = formatDataDimensionsSelections(
      this.filterSelections
    );
    iframe.contentWindow.document.close();
  }

  ngAfterViewInit() {
    try {
      this.setScriptsOnHtmlContent(this.getScriptsContents(this.reportHtml));
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
    console.log('gsgsgsgs');
    return _.filter(scripts, (scriptContent: string) => scriptContent !== '');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';

@Injectable({
  providedIn: 'root'
})
export class ReportingRatesService {
  getReportingRates(dimensions): Observable<any> {
    return this.httpClient.get(
      'analytics.json?dimension=dx:' +
        dimensions.dx +
        '.ACTUAL_REPORTS;' +
        dimensions.dx +
        '.EXPECTED_REPORTS;' +
        dimensions.dx +
        '.REPORTING_RATE;' +
        dimensions.dx +
        '.ACTUAL_REPORTS_ON_TIME;' +
        dimensions.dx +
        '.REPORTING_RATE_ON_TIME&dimension=ou:' +
        dimensions.ou +
        ';' +
        dimensions['childrenIds'].join(';') +
        '&columns=dx&rows=ou&tableLayout=true&hideEmptyRows=true&displayProperty=SHORTNAME&includeNumDen=false&filter=pe:' +
        dimensions.pe
    );
    // 'https://hisptz.com/dhis/api/analytics.json?dimension=dx:TfoI3vTGv1f.ACTUAL_REPORTS;TfoI3vTGv1f.EXPECTED_REPORTS;TfoI3vTGv1f.REPORTING_RATE;TfoI3vTGv1f.ACTUAL_REPORTS_ON_TIME;TfoI3vTGv1f.REPORTING_RATE_ON_TIME&dimension=ou:lgZ6HfZaj3f;g3ATGeDJpr0;FxkvwFQBteg;MGRNfzaj2NR;uQ6AEPLq1W0;P2Nm5FKYzVn;hh0mrmZ1Viq;y3BwWgEBHD4;YbJIrQInY0v;jUpCI4ul5kN;FwGAWe7EO3z;pK5FsujmLPf;qeuUQYiDbq5;mt2tp7QRLQR;ueA5e1VANsu;DFAZ8676wy4;FyUzlX9lEl3;DmmzYQSSqeS;R7gKjuhTRrV;xIujEjtKZBA;pChM6mlXt73;QW1IRLgfxLd;G9w0Sc0VKuW;FDpsVCkyrtX;GlZ96ikDzX9;yxDguaBESrz;IDW9Eez19K6;hbeiD77AQxs;NS7bHDbwDGU;Nr6aPjFfVYV;GWmLIRuCV0b;ctZkJXqHU2e;OapFyXDTlMp;ZldTUkEerVm;Qw4j4vqVZQd;UUzLndJrztc;Y8rGS7kiOav;oawPE6sraJ0;ZfHUjM9fQoN;ri55daHZCCt;gmcaHms2xyb;bbx2XZhopXy;zd1wO4UoL3f;wahSKrGd1v8;myYdAxOCkpR;NV8pMkRVSX1;TCHbcQ8s7mX;Pb6TKoHTzMM;bnCQOypDSZ3;EPP1XcYSwha;JTzn5YtWBIy;wCBr3DZT60M;OEL2xs4Ugpb;mrgygzWlK28;wJNRf5HFkn1;yB8hKiHiVqe;rfo2Eqny4zf;mPP11IHuwHU;TKGFxisQtcd;jeW1i7vkgaH;eyaheIVv5Dw;vdhmdacr3FO;ghb3v1S1T2n;N0LEgbNISqV;oprrRJ54Yup;vB38tTn5YGm;n3WL7IVRMgN;N4i9Iz7VIuN;aVQFxLRDxW3;S75EZoUUftE;ThjuZW56J4J;a0d6GeYHbAO;YnyHZS7iTzr;EDBRNm4RWw3;Xof51ZZ2lfA;pdBigVRgkik;emhg3EE3g9J;x9rWO43vi0w;epbMUPJh161;rNtUQC8WPSu;PH4EosW1FU2;pbt52idmn2y;oKarYKAYqfS;EwiQb3Ro0K8;e3OgvhjDa7D;OKDTYYfnnrP;ch0KchJQVl6;yzeFBSmIi8s;vJ5s1v4SNSQ;AGQikljQSJ1;W1uL3UTkc9I;qObyLU1yJoN;QonSb24QVNo;XWMRqCvR6ce;jGRJjf4ZM94;Evd3wbDmdGu;DPF1vaz6ccH;bggULJVjOsY;cfmo8YynfrX;GsOYPpy6bmd;IzqA1bVBDmf;cYSnu7Ox98B;f8MXG790mlT;To5ATasBZMu;aAMeRYFum96;vwdYYKE89mf;XMXUbkykD72;fRzkZyPlPaU;v9ZWDqvz4bJ;BFKWIV2GhpY;wkt9kBPiUhQ;B4xeYH1Bh44;RFxJQgHTP9I;oI8Qhtokikm;XwSWVFKMzee;C7CbWUh3ZGZ;Kz3En9GmtML;rQCXeEZ2Hu2;mmz3jdw1yZL;PkYOq3i96W5;DxKeXp4SRle;Xe9q1NwLEAu;d0OIGtP3C5z;fMBAgl4v8ZM;VsBybftGPCh;VN8Jjz61jOE;Vnzin0vWH9c;JVgr5ecJKxd;JQMx11NWqAg;n8VMJPOfcnG;hgqiYpjjCGK;VR9DGyn74Qw;zeBD0GNTXuH;WwkgvKn4lbb;jNAny7XRnDb;E7wzi4PdTiD;M63y0lV6dCQ;euufGwsOdQz;cJAFqbZOIn8;q91iEOWkRyx;gpI7lqpQ3mn;Nky82zx6NQw;vu8bIjX9gD1;NJKvbUw3Dd8;hs1LGAP4KH9;WyYqH1ZQ8lf;ZNzUHn9bGfE;qTCRCgN12gE;QZqP8F53daD;zZMzWjD2tux;eCUwwNkqxOL;RGUiWneZsOF;SwXhEVeg1Xy;kIZQN2D1ekK;Fw7YZAASKel;KKI55pR8v43;wq1Uladso66;SuoqM5pXPWG;Z6zJp5EzTlC;n7TEJsHmWDd;hcb09IcZvZo;cMXbDCKFOjr;gDcTrVWcaex;E805RvX8ZwM;Yi6mjmY7FfX;hl6gBEyQ2ZE;xd2Rxi91ZTD;JraJ1Bp0ZAY;mcSNtlO2X3M;TA9jVBhblu6;DwmrRABVABm;DyoW5XtF1Lh;FX9ABe3SEwA;DpUMHSNKeiS;bLU2X0DWfLm;vW00w9u5ghW&columns=dx&rows=ou&tableLayout=true&hideEmptyRows=true&displayProperty=SHORTNAME&includeNumDen=false&filter=pe:201708';
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}

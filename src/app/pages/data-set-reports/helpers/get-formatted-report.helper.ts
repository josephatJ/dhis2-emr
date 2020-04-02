import * as _ from 'lodash';

export function formatReportByDataSetType(dataSet, analytics) {
  if (dataSet['formType'] == 'CUSTOM') {
    return analytics;
  } else {
    return createHtmlFromDataSetReportAnalytics(analytics);
  }
}

function createHtmlFromDataSetReportAnalytics(analytics) {
  let htmlCodes = '';
  _.each(analytics, analyticsRow => {
    htmlCodes +=
      "<h4 style='text-align:left'>" +
      analyticsRow['title'] +
      ' -' +
      analyticsRow['subtitle'] +
      '</h4>';
    let tableHtml = "<table class='table table-striped table-bordered'>";
    let tableHeader = '<thead><tr>';
    _.map(analyticsRow['headers'], header => {
      tableHeader += '<td>' + header.name + '</td>';
    });
    tableHeader += '</tr></thead class="table-header">';
    let tableBody = '<tbody>';
    _.map(analyticsRow['rows'], rowData => {
      let tableBodyRow = '<tr>';
      _.map(analyticsRow['headers'], (header, index) => {
        tableBodyRow +=
          rowData[index] == null
            ? '<td></td>'
            : '<td>' + rowData[index] + '</td>';
      });
      tableBodyRow += '</tr>';
      tableBody += tableBodyRow;
    });
    tableBody += '</tbody>';
    tableHtml += tableHeader;
    tableHtml += tableBody;
    tableHtml += '</table>';
    htmlCodes += tableHtml;
  });
  return htmlCodes;
}

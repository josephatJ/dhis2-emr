import * as _ from 'lodash';

export function formatAnalyticsForDataTable(rows, headers) {
  let newRows = [];
  let headerKeys: any[] = ['no', 'ou'];
  let newHeaders: any = {
    no: 'No.',
    ou: 'Organisation unit'
  };

  // create headers
  _.each(headers, header => {
    newHeaders[header.id] = _.startCase(_.toLower(header.name));
    headerKeys.push(header.id);
  });

  // format rows
  _.each(rows, (row, rowCount) => {
    let rowData = {};
    _.each(Object.keys(newHeaders), (key, index) => {
      if (index == 0) {
        if (rowCount == 0) {
          rowData['no'] = 'Main unit (Av.)';
        } else {
          rowData['no'] = rowCount;
        }
      } else {
        rowData[key] = row[index - 1];
      }
    });
    newRows.push(rowData);
  });
  return { columns: headerKeys, data: newRows, headersReferences: newHeaders };
}

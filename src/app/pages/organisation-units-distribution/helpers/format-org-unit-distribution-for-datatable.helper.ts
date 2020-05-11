import * as _ from 'lodash';

export function formatOuDistributionForDataTable(rows, headers) {
  let newRows = [];
  let headerKeys: any[] = ['no'];
  let newHeaders: any = {
    no: 'No.'
  };

  // create headers
  _.each(headers, header => {
    newHeaders[header.name] = header.column
      ? _.startCase(_.toLower(header.column))
      : 'Org Unit';
    headerKeys.push(header.name);
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

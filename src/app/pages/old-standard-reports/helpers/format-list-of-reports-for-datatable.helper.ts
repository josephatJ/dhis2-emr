import * as _ from 'lodash';

export function formatReportsForDataTable(items) {
  let formattedItems = [];
  _.each(_.orderBy(items, ['name'], ['asc']), (item, index) => {
    formattedItems.push({
      position: index + 1,
      id: item.id,
      type: item.type ? item.type : 'reports',
      name: item.name,
      action: {
        id: item.id,
        canView: true,
        type: item.type ? item.type : 'reports'
      }
    });
  });
  return formattedItems;
}

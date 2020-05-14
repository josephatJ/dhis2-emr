import * as _ from 'lodash';

export function formatReportsForDataTable(items) {
  let formattedItems = [];
  _.each(items, (item, index) => {
    formattedItems.push({
      position: index + 1,
      id: item.id,
      name: item.name,
      action: {
        id: item.id,
        canView: true
      }
    });
  });
  return formattedItems;
}

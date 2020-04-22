import * as _ from 'lodash';
export function formDataSetDimension(dimension) {
  let dimensionItems = [];
  _.each(dimension.items, item => {
    dimensionItems.push({
      id: item.id,
      name: item.displayName,
      dimension: {
        id: dimension.id,
        name: dimension.displayName
      }
    });
  });
  return dimensionItems;
}

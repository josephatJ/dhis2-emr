import * as _ from 'lodash';

export function createSelectionDimensions(selections, dx) {
  return {
    dx: dx,
    ou: getItemsIds(_.filter(selections, { dimension: 'ou' })[0]['items'])[0],
    pe: getItemsIds(_.filter(selections, { dimension: 'pe' })[0]['items'])[0],
    level: Number(
      _.filter(selections, { dimension: 'ou' })[0]['items'][0]['level']
    )
  };
}

function getItemsIds(items) {
  let itemsIds = [];
  _.map(items, item => {
    itemsIds.push(item.id);
  });
  return itemsIds;
}

export function createUniqueIdFromDimensions(dimensions) {
  return dimensions.dx + '-' + dimensions.pe + '-' + dimensions.ou;
}

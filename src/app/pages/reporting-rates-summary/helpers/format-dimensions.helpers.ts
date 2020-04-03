import * as _ from 'lodash';

export function createSelectionDimensions(selections, dx, ouWithChildren) {
  return {
    dx: dx,
    ou: getItemsIds(_.filter(selections, { dimension: 'ou' })[0]['items'])[0],
    pe: getItemsIds(_.filter(selections, { dimension: 'pe' })[0]['items'])[0],
    level: Number(
      _.filter(selections, { dimension: 'ou' })[0]['items'][0]['level']
    ),
    childrenIds: getChildrenIds(ouWithChildren)
  };
}

function getChildrenIds(ouWithChildren) {
  let ouIds = [];
  if (ouWithChildren['children']) {
    _.map(ouWithChildren['children'], child => {
      ouIds.push(child.id);
    });
  }
  return ouIds;
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

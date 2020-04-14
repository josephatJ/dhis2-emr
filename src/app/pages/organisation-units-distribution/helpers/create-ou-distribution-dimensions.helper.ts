import * as _ from 'lodash';

export function formulateOuDimensions(ouWithChildren, selections) {
  return {
    ous: createOusArr(ouWithChildren),
    distributionType: selections['ouGroupSet']['id']
  };
}

function createOusArr(ouWithChildren) {
  let ouIds = [];
  ouIds.push(ouWithChildren.id);
  if (ouWithChildren['children']) {
    _.map(ouWithChildren['children'], child => {
      ouIds.push(child.id);
    });
  }
  return ouIds;
}

import * as _ from 'lodash';

export function formatDataDimensionsSelections(filterSelections) {
  return {
    ou: _.filter(filterSelections, { dimension: 'ou' })[0]['items'],
    pe: _.filter(filterSelections, { dimension: 'pe' })[0]['items']
  };
}

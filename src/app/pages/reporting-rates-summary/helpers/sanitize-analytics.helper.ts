import * as _ from 'lodash';

export function sanitizeAnalytics(analytics) {
  let newAnalytics = {
    headers: analytics['headers'],
    metaData: {
      names: getNames(
        analytics['metaData']['dimensions'],
        analytics['metaData']['items']
      ),
      items: analytics['metaData']['items'],
      dx: analytics['metaData']['dimensions']['dx'],
      pe: analytics['metaData']['dimensions']['pe'],
      ou: analytics['metaData']['dimensions']['ou'],
      co: analytics['metaData']['dimensions']['co']
    },
    rows: analytics['rows']
  };
  return newAnalytics;
}

function getNames(dimensions, items) {
  let names = {};
  _.map(
    _.union(
      _.union(
        _.union(dimensions['ou'], dimensions['dx']),
        _.union(dimensions['pe'])
      ),
      _.union(dimensions['co'])
    ),
    dimensionId => {
      names[dimensionId] = items[dimensionId].name;
    }
  );
  return names;
}

export function addAnalyticsToVisualizationLayer(analytics, dataSet) {
  let layerConfig = {
    id: dataSet['id'],
    analytics: analytics,
    config: {
      id: dataSet['id'],
      name: dataSet.name,
      displayName: dataSet.name,
      title: dataSet.name,
      showData: true,
      publicAccess: 'rw------',
      type: 'COLUMN',
      regressionType: 'NONE',
      completedOnly: false,
      sortOrder: 0,
      topLimit: 0,
      aggregationType: 'DEFAULT',
      visualizationType: 'CHART',
      hideTitle: false
    },
    layout: {
      rows: ['pe'],
      columns: ['dx']
    },
    preferedChartTypes: []
  };
  return [layerConfig];
}

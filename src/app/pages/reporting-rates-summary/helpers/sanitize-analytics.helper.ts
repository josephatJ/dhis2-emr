import * as _ from 'lodash';

export function sanitizeAnalytics(analytics) {
  let newAnalytics = {
    headers: formatHeaders(
      analytics['headers'],
      analytics['metaData']['dimensions']['dx']
    ),
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
    rows: formatRowsData(
      analytics['rows'],
      analytics['metaData']['dimensions']['ou'],
      analytics['metaData']['dimensions']['dx']
    )
  };

  return newAnalytics;
}

function formatRowsData(rows, ous, dxs) {
  let formattedRows = [];
  if (rows && rows.length > 0) {
    _.map(rows, (row, rowIndex) => {
      let newRow = [];
      newRow.push(row[1]);
      _.map(dxs, (dx, i) => {
        newRow.push(row[i + 4]);
      });
      formattedRows.push(newRow);
    });
  }
  return formattedRows;
}

function formatHeaders(headers, dx) {
  let newHeaders = [];
  _.map(dx, (columElem, index) => {
    newHeaders.push({
      name: headers[index + 4].name,
      id: columElem,
      valueType: headers[index + 4].valueType,
      type: headers[index + 4].type,
      hidden: headers[index + 4].hidden,
      meta: headers[index + 4].meta
    });
  });
  return newHeaders;
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

export function addAnalyticsToVisualizationLayer(
  analytics,
  dataSet,
  visualizationType
) {
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
      visualizationType: visualizationType,
      hideTitle: false
    },
    layout: {
      rows: ['ou'],
      columns: ['dx'],
      filters: ['pe']
    },
    preferedChartTypes: []
  };
  return [layerConfig];
}

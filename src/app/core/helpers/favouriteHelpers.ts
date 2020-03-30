import * as _ from 'lodash';

export function cleanFavouriteData(favouriteConfigurations, favouriteData) {
  let data: Array<any> = [];

  if (favouriteConfigurations.series == 'dx') {
    let valueIndex = _.findIndex(favouriteData.headers, (headerRow: any) => {
      return headerRow.name == 'value' ? true : false;
    });

    favouriteData.metaData.dimensions.dx.forEach(dx => {
      let dxArray: Array<any> = [];

      _.each(
        _.filter(favouriteData.rows, data => {
          return data[0] == dx ? true : false;
        }),
        favDataRow => {
          dxArray.push(parseFloat(favDataRow[valueIndex]));

          data.push({
            name: favouriteData.metaData.items[dx].name,
            data: dxArray
          });
        }
      );
    });

    return data;
  } else if (favouriteConfigurations.series == 'pe') {
  } else if (favouriteConfigurations.series == 'ou') {
  }
}

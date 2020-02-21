import * as _ from 'lodash';
import { Observable } from 'rxjs';

export function fetchFavourite(
  favouriteId: string,
  favouriteType: string,
  orgUnit: Observable<string>,
  period: Observable<string>
) {
  console.log('fetching ' + favouriteType + ' for ' + orgUnit);
}

export function fetchFunctionsData() {
  console.log('fetching functions data ');
}

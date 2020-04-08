import { DataSetDimensionsEffects } from './dataset-dimensions.effects';
import { DataSetsEffects } from './datasets.effects';
import { ReportingRatesEffects } from './reporting-rates.effects';
import { OuWithChildrenEffects } from './org-units.effects';

export const effects: any[] = [
  DataSetsEffects,
  DataSetDimensionsEffects,
  ReportingRatesEffects,
  OuWithChildrenEffects
];

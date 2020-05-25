import { SelectionFiltersModule } from './selection-filters/selection-filters.module';
import { NgxDhis2ChartModule } from './ngx-dhis-chart/ngx-dhis2-chart.module';
import { NgxDhis2TableModule } from './ngx-dhis2-table/ngx-dhis2-table.module';
import { DatasetFilterModule } from './datasets/dataset-filter.module';
export const modules: any[] = [
  SelectionFiltersModule,
  NgxDhis2ChartModule,
  NgxDhis2TableModule,
  DatasetFilterModule
];

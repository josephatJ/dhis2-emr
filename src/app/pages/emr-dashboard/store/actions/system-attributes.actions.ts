import { createAction, props } from '@ngrx/store';

export const loadSystemAttributes = createAction(
  '[Attributes] load system attributes'
);

export const addLoadedAttributes = createAction(
  '[Attributes] add loaded attributes',
  props<{ attributes: any }>()
);

export const loadingSystemAttributesFail = createAction(
  '[Attributes] loading system attributes fail',
  props<{ error: any }>()
);

// Attribute value

export const loadAttributeValue = createAction(
  '[Attributes] load attribute value',
  props<{ id: string }>()
);

export const addLoadedAttributeValue = createAction(
  '[Attributes] add loaded attribute value',
  props<{ attributeValue: any }>()
);

export const addingAttributeValueFails = createAction(
  '[Attributes] loading attribute fails',
  props<{ error: any }>()
);

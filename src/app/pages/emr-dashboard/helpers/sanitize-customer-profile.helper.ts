import { filterAttributeValue } from './patients-list.helper';

export function sanitizeCustomerProfileBasicDetails(
  customer,
  systemAttributes
) {
  let info = {
    uid: customer.id,
    name: customer.name,
    phone: customer.phoneNumber ? customer.phoneNumber : '',
    address: customer.address ? customer.address : ''
  };
  return {
    ...info,
    ...filterAttributeValue('', customer['attributeValues'], systemAttributes)
  };
}

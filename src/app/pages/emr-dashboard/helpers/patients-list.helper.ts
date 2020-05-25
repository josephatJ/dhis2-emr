import * as _ from 'lodash';

export function formatPatientsList(ous, systemAttributes) {
  let patientsList = [];
  _.each(_.orderBy(ous, ['name'], 'asc'), (ou, index) => {
    // check if DOD is filled
    if (formatAttributeValues(ou['attributeValues'])['vVfUj2TbAMS']) {
    } else {
      let info = {
        uid: ou.id,
        no: index + 1,
        name: ou.name,
        phone: ou.phoneNumber ? ou.phoneNumber : '',
        address: ou.address ? ou.address : ''
      };

      patientsList.push({
        ...info,
        ...filterAttributeValue('', ou['attributeValues'], systemAttributes)
      });
    }
  });
  return patientsList;
}

function formatAttributeValues(attributeValues) {
  let attributeValuesNew = {};
  _.each(attributeValues, attributeValue => {
    attributeValuesNew[attributeValue['attribute'].id] = attributeValue.value;
  });
  return attributeValuesNew;
}

export function filterAttributeValue(attr, attributeValues, systemAttributes) {
  let otherPatientsParameters = {};
  const formattedAttributeValues = formatAttributeValues(attributeValues);
  _.each(Object.keys(formattedAttributeValues), key => {
    if (
      systemAttributes[key]['valueType'] !== 'DATE' &&
      systemAttributes[key]['name'] != 'dob'
    ) {
      otherPatientsParameters[
        formatAttributesName(systemAttributes[key]['name'])
      ] = formattedAttributeValues[key];
    } else {
      otherPatientsParameters[
        formatAttributesName(systemAttributes[key]['name'])
      ] = formatDateYYMMDD(formattedAttributeValues[key]);
      otherPatientsParameters['age'] =
        (
          new Date().getFullYear() -
          new Date(formattedAttributeValues[key]).getFullYear()
        ).toString() + ' yrs';
    }
  });
  return otherPatientsParameters;
}

export function formatDateYYMMDD(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  console.log(month, day, year);

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function formatAttributesName(name) {
  return name;
}

export function getMaxIdForNewCustomer(customers) {
  // /trackedEntityAttributes/A8BLuHG0EPt/generate?
  let ids = [];
  _.each(customers, customer => {
    ids.push(
      Number(
        formatAttributeValues(customer.attributeValues)['DbhGqH8TSuj'].split(
          '/'
        )[2]
      )
    );
  });
  return (
    'PAT/' +
    new Date().getFullYear().toString() +
    '/' +
    (_.sortBy(ids)[ids.length - 1] + 1).toString()
  );
}

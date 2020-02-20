import * as _ from 'lodash';

export function getElementDetails() {
  let elementsArray: Array<any> = [];

  let htmlElements = document.getElementsByClassName('custom-elem');
  console.log(htmlElements);
  //loop through elements
  _.each(htmlElements, element => {
    console.log(element);
    let elementObject: {} = {};
    elementObject['id'] = element.id;
    elementObject['type'] = element.getAttribute('type');
    elementObject['category'] = element.getAttribute('category');

    elementsArray.push(elementObject);
  });

  console.log(elementsArray);
  return elementsArray;
}

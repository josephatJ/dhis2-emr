import * as _ from 'lodash';

export function getElementDetails() {
  let elementsArray: Array<any> = [];

  let htmlElements = document.getElementsByClassName('custom-elem');

  _.each(htmlElements, element => {
    let elementObject: {} = {};
    elementObject['id'] = element.id;
    elementObject['type'] = element.getAttribute('type');
    elementObject['category'] = element.getAttribute('category');

    elementsArray.push(elementObject);

    document.getElementById(element.id).innerHTML = 'loading';
  });

  return elementsArray;
}

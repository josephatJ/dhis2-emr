import * as _ from 'lodash';

export function evaluateIndicatorFormula() {
  let indicatorElements = document.getElementsByTagName('INPUT');
  let count = 0;
  let check = 0;
  _.each(indicatorElements, indicatorElement => {
    try {
      let expression = indicatorElement.getAttribute('indicatorformula');
      let elementId = indicatorElement.getAttribute('id');
      let parentElement = indicatorElement.parentElement;
      const formulaPattern = /#\{.+?\}/g;
      expression.match(formulaPattern).forEach(matchedItem => {
        document
          .querySelectorAll(
            'span[data-co=' +
              matchedItem.replace(/[#\{\}]/g, '').split('.')[1] +
              '][data-de=' +
              matchedItem.replace(/[#\{\}]/g, '').split('.')[0] +
              ']'
          )
          .forEach(span => {
            let inputValue = span.innerHTML;
            expression = inputValue
              ? expression.replace(matchedItem, Number(inputValue))
              : expression.replace(matchedItem, 0);
          });
      });
      if (eval(expression)) {
        document.getElementById(elementId)
          ? document
              .getElementById(elementId)
              .setAttribute('value', eval(expression).toFixed(0))
          : console.log('elementId', elementId);
      }
    } catch (e) {}
  });
}

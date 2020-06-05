import * as _ from 'lodash';

export function formatDoctorsRoomsData(events) {
  let doctorsRooms = [];
  _.each(events, event => {
    doctorsRooms.push({
      id: event['event'],
      name: _.filter(event['dataValues'], { dataElement: 'CT4D0Q9o3rU' })[0][
        'value'
      ],
      category: _.filter(event['dataValues'], {
        dataElement: 'HpoBiML3UmH'
      })[0]['value'],
      cost: _.filter(event['dataValues'], { dataElement: 'wrsy8usONKc' })[0][
        'value'
      ]
    });
  });
  return doctorsRooms;
}

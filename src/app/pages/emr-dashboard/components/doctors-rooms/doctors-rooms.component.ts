import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formatDoctorsRoomsData } from '../../helpers/doctors-rooms.helper';

@Component({
  selector: 'app-doctors-rooms',
  templateUrl: './doctors-rooms.component.html',
  styleUrls: ['./doctors-rooms.component.css']
})
export class DoctorsRoomsComponent implements OnInit {
  @Input() doctorsRoomsData: any;
  @Output() doctorsRoomSelected: EventEmitter<any> = new EventEmitter<any>();
  doctorsRooms: any;
  selectedRoom: any;
  constructor() {}

  ngOnInit(): void {
    this.doctorsRooms = formatDoctorsRoomsData(this.doctorsRoomsData);
  }

  onSelectionOfRoomChange(room) {
    this.doctorsRoomSelected.emit(room);
  }
}

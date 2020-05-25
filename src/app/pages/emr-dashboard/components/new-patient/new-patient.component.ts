import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  formatDateYYMMDD,
  getMaxIdForNewCustomer
} from '../../helpers/patients-list.helper';
import { CustomerDataService } from '../../services/customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadOuChildrenAsPatients } from '../../store/actions';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  @Input() customerUID: string;
  @Input() currentUser: any;
  @Input() systemAttributes: any;
  @Input() customers: any;
  @Input() trackedEntityInstanceId: string;
  @Input() facilityId: string;
  formGroup: FormGroup;
  nameAlert: string = 'This field is required';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  insuranceFormGroup: FormGroup;
  minDate: Date;
  maxDate: Date;
  date: string;
  internalPatientId: string;
  constructor(
    private store: Store<State>,
    private router: Router,
    private _formBuilder: FormBuilder,
    private customerDataService: CustomerDataService
  ) {}

  ngOnInit(): void {
    this.internalPatientId = getMaxIdForNewCustomer(this.customers);
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 150, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDate);
    this.setChangeValidate();
    this.firstFormGroup = this._formBuilder.group({
      id: [this.internalPatientId],
      isEmergency: [''],
      title: [''],
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      maritalstatus: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      phone: ['']
    });
    this.insuranceFormGroup = this._formBuilder.group({
      insuranceId: ['', Validators.required]
    });
  }

  getDate(value) {
    console.log(value);
    //this.date = this.formatDateYYYYMMDD(new Date(value));
  }

  setChangeValidate() {}

  get firstname() {
    return this.firstFormGroup.get('firstname') as FormControl;
  }

  get lastname() {
    return this.firstFormGroup.get('lastname') as FormControl;
  }

  get gender() {
    return this.firstFormGroup.get('gender') as FormControl;
  }

  Save(basicInfo, contactsInfo, c) {
    const demographic = basicInfo.value;
    const contacts = contactsInfo.value;
    console.log(demographic);
    console.log(contacts);
    const now = new Date();
    // api/29/schemas/organisationUnit
    let fullName =
      demographic.firstname +
      ' ' +
      (demographic.middlename ? demographic.middlename : '') +
      ' ' +
      demographic.lastname;
    let newCustomer = {
      attributeValues: [
        {
          value: demographic.firstname,
          attribute: {
            id: 'f3c4ZQKggF7',
            name: 'firstName'
          }
        },
        {
          value: formatDateYYMMDD(demographic.dob),
          attribute: {
            id: 'B1K8Peqvhp2',
            name: 'dob'
          }
        },
        {
          value: demographic.lastname,
          attribute: {
            id: 'Uz5XhvXRj7y',
            name: 'lastName'
          }
        },
        {
          value: demographic.middlename ? demographic.middlename : '',
          attribute: {
            id: 'C4VczEj85f9',
            name: 'middleName'
          }
        },
        {
          value: demographic.id,
          attribute: {
            id: 'DbhGqH8TSuj',
            name: 'internalPatientId'
          }
        },
        {
          value: demographic.gender,
          attribute: {
            name: 'gender',
            id: 'APGmr2YXTlO'
          }
        },
        {
          value: demographic.title ? demographic.title : '',
          attribute: {
            name: 'title',
            id: 'FvJc9lUdVu5'
          }
        }
      ],
      name: fullName,
      shortName: fullName.substring(0, 50),
      openingDate: formatDateYYMMDD(now),
      address: contacts.address ? contacts.address : '',
      phoneNumber: contacts.phone ? contacts.phone : '',
      parent: {
        id: 'geZkVaZQpX1'
      },
      id: this.customerUID
    };
    console.log(newCustomer);

    /**
     * Generate PatientId here
     */

    this.customerDataService.saveCustomer(newCustomer).subscribe(response => {
      if (response) {
        console.log(response);
        // For very first time
        //API: trackedEntityInstances

        const trackedEntityInstances = {
          id: this.trackedEntityInstanceId,
          trackedEntityType: 'kPbz5kPNyVa',
          orgUnit: this.customerUID,
          attributes: [
            {
              attribute: 'czms8kCQhu3',
              value: this.internalPatientId
            },
            {
              attribute: 'oGCEkj3GkhR',
              value: this.customerUID
            }
          ]
        };
        this.customerDataService
          .saveTrackedEntityInstances(trackedEntityInstances)
          .subscribe(trackedEntityInstanceResponse => {
            if (trackedEntityInstanceResponse.status == 'OK') {
              // API: enrollments
              const enrollments = {
                trackedEntityInstance:
                  trackedEntityInstanceResponse.response['importSummaries'][0][
                    'reference'
                  ],
                program: 'K1QeifE9L7Q',
                status: 'ACTIVE',
                orgUnit: this.customerUID,
                enrollmentDate: formatDateYYMMDD(new Date()),
                incidentDate: formatDateYYMMDD(new Date())
              };
              this.customerDataService
                .saveEnrollments(enrollments)
                .subscribe(enrollmentStatus => {
                  console.log(enrollmentStatus);
                  this.store.dispatch(
                    loadOuChildrenAsPatients({ ouId: this.facilityId })
                  );
                  this.router.navigate(['/clients', this.customerUID]);
                });
            }
          });
      }
    });

    // Object when updating
    // api/29/organisationUnits/cUN09aQskAB?mergeMode=REPLACE
    const customerUpdatingObj = {
      path: '/geZkVaZQpX1/cUN09aQskAB',
      lastUpdated: '2020-05-23T18:17:58.783',
      id: 'cUN09aQskAB',
      level: 2,
      created: '2020-05-03T20:50:53.677',
      attributeValues: [
        {
          value: '1998-08-04T21:00:00.000Z',
          attribute: {
            name: 'Date of birth',
            id: 'B1K8Peqvhp2',
            displayName: 'Date of birth'
          }
        },
        {
          value: 'Alina',
          attribute: {
            name: 'middleName',
            id: 'C4VczEj85f9',
            displayName: 'middleName'
          }
        },
        {
          value: 'PAT/2020/05/001',
          attribute: {
            name: 'Patient ID',
            id: 'DbhGqH8TSuj',
            displayName: 'Patient ID'
          }
        },
        {
          value: 'Janet',
          attribute: {
            name: 'Firstname',
            id: 'f3c4ZQKggF7',
            displayName: 'Firstname'
          }
        },
        {
          value: 'MacLean',
          attribute: {
            name: 'lastName',
            id: 'Uz5XhvXRj7y',
            displayName: 'lastName'
          }
        }
      ],
      phoneNumber: '+255 786 456 373',
      name: 'Janeth Alina',
      shortName: 'Janeth Alina',
      contactPerson: 'Josephat Mwakyusa',
      openingDate: '2020-05-01T00:00:00.000',
      address: 'Ubungo Dar es salaam',
      parent: {
        id: 'geZkVaZQpX1'
      },
      lastUpdatedBy: {
        id: 'kxXOM8OzBae'
      },
      user: {
        id: 'M5zQapPyTZI'
      },
      translations: []
    };
  }
}

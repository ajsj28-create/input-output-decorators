import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss']
})
export class CompCComponent implements OnInit {

// 🧩 Task 1
@Input() childMeeting!: any;

// 🧩 Task 2
@Input() childStudent2!: any;

// 🧩 Task 3
@Input() childEmployee3!: any;

// 🧩 Task 4
@Input() childBooking!: any;

// 🧩 Task 5
@Input() childCourse5!: any;

// 🧩 Task 6
@Input() childOrder!: any;

// 🧩 Task 7
@Input() childPlaylist!: any;

// 🧩 Task 8
@Input() childEnrollment!: any;

// 🧩 Task 9
@Input() childPatientRecord!: any;

// 🧩 Task 10
@Input() childTransaction!: any;

// 🧩 Task 11
@Input() childProduct!: any;

// 🧩 Task 12
@Input() childMovie!: any;

// 🧩 Task 13
@Input() childShipment!: any;

// 🧩 Task 14
@Input() childAdmission!: any;

// 🧩 Task 15
@Input() childConference!: any;

// 🧩 Task 16
@Input() childInvoice!: any;

// 🧩 Task 17
@Input() childOrderNow!: any;

// 🧩 Task 18
@Input() childTicket!: any;

// 🧩 Task 19
@Input() childTransactionBank!: any;

// 🧩 Task 20
@Input() childProductSell!: any;

// 🧩 Task 21
@Input() childGuestBook!: any;

// 🧩 Task 22
@Input() childCart!: any;

// 🧩 Task 23
@Input() childRestaurantOrder!: any;

// 🧩 Task 24
@Input() childClassSchedule!: any;

// 🧩 Task 25
@Input() childEcommerceOrder!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
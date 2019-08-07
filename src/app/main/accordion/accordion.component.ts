import { Component, OnInit } from '@angular/core';
// import { AccordionConfig } from 'ngx-bootstrap/accordion';

// export function getAccordionConfig(): AccordionConfig {
//   return Object.assign(new AccordionConfig(), { closeOthers: true });
// }

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
  // providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class AccordionComponent implements OnInit {

  oneAtATime: boolean = true;
  timeModel: boolean =true;
  dateModel: boolean =true;

  dateTime: boolean = false;
  timeBool: boolean = false;
  dateBool: boolean = false;

  timeFunc() {
    this.dateBool = false;
    this.dateTime = true;
    this.timeBool = !this.timeBool;
  }
  dateFunc() {
    this.timeBool = false;
    this.dateTime = true;
    this.dateBool = !this.dateBool;
  }
  // customClass1 = 'customClass1';
  // customClass2 = 'customClass2';
  // customClass3 = 'customClass3';

  constructor() { }

  ngOnInit() {
  }

}

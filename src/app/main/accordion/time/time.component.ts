import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  ismeridian: boolean = true;
 
  mytime: Date = new Date();
  
 
  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }

  constructor() { }

  ngOnInit() {
  }

}

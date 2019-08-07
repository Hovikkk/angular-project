import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  
  contentArray = new Array(80).fill('');
  returnedArray: string[];
 
  ngOnInit(): void {
    this.contentArray = this.contentArray.map((v: string, i: number) => `${i + 1}`);
    this.returnedArray = this.contentArray.slice(0, 10);
  }
 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}

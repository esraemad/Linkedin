import { Summary } from './../../Model/Summary';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  clientsummary: Summary ;
  constructor() { }

  getsummary() {
    console.log(this.clientsummary);
    return this.clientsummary;
  }
  Add(summ: Summary) {
    this.clientsummary = summ;
    console.log(this.clientsummary);
    return this.clientsummary;
  }  

 
}

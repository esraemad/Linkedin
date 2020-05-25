import { Injectable } from '@angular/core';
import {Experience} from'../../Model/Experience';
@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesServeicesService {
  clientexperiences: Experience[]=[];
  constructor() {   
  }
  getall() {
    return this.clientexperiences;
  }

  getbyId(id: number): Experience {
    const idx = this. clientexperiences.find(ce => ce.id === id);
    console.log(idx);
    return idx;
  }

  deletebyId(id: number) {
   
    const i = this.clientexperiences.findIndex(ce => ce.id == id);
    this.clientexperiences.splice(i, 1);
    return this.clientexperiences;
  }

  updateById(exp: Experience) {
    const idx2 = this.clientexperiences.findIndex(ce => ce.id === exp.id);
    this.clientexperiences[idx2] = exp;
    return this.clientexperiences[idx2];
  }
  
  Add(exp: Experience) {
    exp.id = this.clientexperiences.length + 1;
    this.clientexperiences.push(exp);
    console.log(this.clientexperiences);
    return this.clientexperiences;
  }  
}
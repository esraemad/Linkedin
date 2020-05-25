import { Injectable } from "@angular/core";
import { Education } from "./../../Model/Education";
@Injectable({
  providedIn: "root"
})
export class EducationService {
  educArr: Education[] = [];
  constructor() {}
  add(edu: Education) {
    edu.id = this.educArr.length + 1;
    this.educArr.push(edu);
  }
  getAll() {
    console.log("education Arr" + this.educArr);
    return this.educArr;
  }
  getbyId(id: number): Education {
    const obj = this.educArr.find(e => e.id === id);
    console.log(obj);
    return obj;
  }
}

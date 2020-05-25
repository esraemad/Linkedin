import { Injectable } from "@angular/core";
import { SkillsComponent } from "./skills.component";
import { Skill } from "../../Model/skills";
@Injectable({
  providedIn: "root"
})
export class SkillsServiceService {
  skillsArr: Skill[] = [];
  constructor() {}

  add(newSkill: Skill[]) {
    // newSkill.id = this.skillsArr.length + 1;
    // this.skillsArr = [...newSkill];
    this.skillsArr.push(...newSkill); //to merge arrays
  }

  getAll() {
    // console.log(
    //   "skills Arr getall" + JSON.parse(JSON.stringify(this.skillsArr))
    // );
    return JSON.stringify(this.skillsArr);
  }
  getbyId(id: number): Skill {
    const idx = this.skillsArr.find(s => s.id === id);
    console.log(idx);
    return idx;
  }
  deleteById(id:number){
    const idx = this.skillsArr.findIndex(s => s.id === id);
   this.skillsArr.splice(Number(idx),1) ;
   return this.skillsArr;

  }
}

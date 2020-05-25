import { Component, OnInit } from "@angular/core";

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { LanguageComponent } from "../dialogues/language/language.component";
import { SkillsComponent } from "../dialogues/skills/skills.component";
import { EducationComponent } from "../dialogues/education/education.component";
import { RequestRecommendationComponent } from "../dialogues/request-recommendation/request-recommendation.component";
import { SummaryComponent } from "../dialogues/summary/summary.component";
import { WorkExperienceComponent } from "../dialogues/work-experience/work-experience.component";
import { LinksComponent } from "../dialogues/links/links.component";
import { WorkExperiencesServeicesService } from "../dialogues/work-experience/work-experiences-serveices.service";
import { SkillsServiceService } from "./../dialogues/skills/skills-service.service";
import { Skill } from "../Model/skills";
import { EducationService } from "./../dialogues/education/education.service";
import { Education } from "../Model/Education";
import { Experience } from "../Model/Experience";
import { PostCreateComponent } from "../post/post-create/post-create.component";
import { SummaryService } from "../dialogues/summary/summary.service";
import { Summary } from "../Model/Summary";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  workplaces: Experience[];
  myexp: Experience;
  skillsArr: Skill[] = [];
  allskills: Skill[] = [];
  editedSkill: Skill;
  allEducations: Education[];
  educ: Education;
  summ: Summary;
  ngOnInit(): void {
    this.workplaces = this.workserv.getall();
    this.allskills = JSON.parse(this.skillService.getAll());
    this.allEducations = this.educationService.getAll();
  }
  constructor(
    private dialog: MatDialog,
    public workserv: WorkExperiencesServeicesService,
    public skillService: SkillsServiceService,
    public educationService: EducationService,
    public sumserv: SummaryService
  ) {}

  editDialog(e: any, workex: Experience) {
    let arr = [
      LanguageComponent,
      SkillsComponent,
      EducationComponent,
      RequestRecommendationComponent,
      SummaryComponent,
      WorkExperienceComponent,
      LinksComponent
    ];
    let temp: any = e + "Component";
    // console.log(temp);
    let res = arr.filter(comp => comp.name == temp);
    this.myexp = this.workserv.getbyId(workex.id);
    console.log(this.myexp);
    console.log(res);
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
      maxHeight: "600px",
      data: {
        empdata: this.myexp
        // empdata:'hamada'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`here is the data result ${result}`);
    });

    console.log(workex);
  }
  openMedia() {}
  openDialog(e: any): void {
    let arr = [
      LanguageComponent,
      SkillsComponent,
      EducationComponent,
      RequestRecommendationComponent,
      SummaryComponent,
      WorkExperienceComponent,
      LinksComponent,
      PostCreateComponent
    ];
    let temp: any = e + "Component";
    console.log(temp);
    let res = arr.filter(comp => comp.name == temp);
    console.log(res);
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
      maxHeight: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.allskills = JSON.parse(this.skillService.getAll()); //[obj obj]
      var object = JSON.parse(JSON.stringify(this.allskills));
      this.skillsArr = object.map(res => res.name);
      // this.skillsArr = object.map(obj => ({ id: obj.id, name: obj.name }));

      this.allEducations = this.educationService.getAll();
      this.summ = this.sumserv.getsummary();
    });
  }

  editSkillDialog(e: any, sk: Skill) {
    let arr = [
      LanguageComponent,
      SkillsComponent,
      EducationComponent,
      RequestRecommendationComponent,
      SummaryComponent,
      WorkExperienceComponent,
      LinksComponent
    ];
    let temp: any = e + "Component";
    // console.log(temp);
    let res = arr.filter(comp => comp.name == temp);

    let num = this.skillsArr.indexOf(sk);
    this.editedSkill = this.skillService.getbyId(num);
    console.log(this.editedSkill.name);
    console.log(res);
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
      maxHeight: "600px",
      data: {
        empdata: this.editedSkill
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`here is the data result ${result}`);
      this.allskills = JSON.parse(this.skillService.getAll()); //[obj obj]
      var object = JSON.parse(JSON.stringify(this.allskills));
      this.skillsArr = object.map(res => res.name);
    });
  }
  onDeleteSkill(s : Skill){
    this.allskills= this.skillService.deleteById( this.skillsArr.indexOf(s));
    var object = JSON.parse(JSON.stringify(this.allskills));
    this.skillsArr = object.map(res => res.name);
  //  console.log(this.skillsArr)
  }
  editEducationDialog(e: any, edu: Education) {
    let arr = [
      LanguageComponent,
      SkillsComponent,
      EducationComponent,
      RequestRecommendationComponent,
      SummaryComponent,
      WorkExperienceComponent,
      LinksComponent
    ];
    let temp: any = e + "Component";
    // console.log(temp);
    let res = arr.filter(comp => comp.name == temp);
    this.educ = this.educationService.getbyId(edu.id);
    console.log(this.educ);
    console.log(res);
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
      maxHeight: "600px",
      data: {
        empdata: this.educ
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`here is the data result ${result}`);
      this.allEducations = this.educationService.getAll();
    });
  }

  editSummaryDialog(e: any) {
    let arr = [
      LanguageComponent,
      SkillsComponent,
      EducationComponent,
      RequestRecommendationComponent,
      SummaryComponent,
      WorkExperienceComponent,
      LinksComponent
    ];
    let temp: any = e + "Component";
    // console.log(temp);
    let res = arr.filter(comp => comp.name == temp);

    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
      data: {
        thesummmary: this.summ
      }
    });
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

}

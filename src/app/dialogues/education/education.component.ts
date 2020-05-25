import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

// import { FormControl,FormsModule } from '@angular/forms';
import { EducationService } from "./education.service";
import { Education } from "../../Model/Education";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"]
})
export class EducationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EducationComponent>,
    public educationService: EducationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  years: number[] = [
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];
  editflag = false;
  education = new Education();
  ngOnInit(): void {
    if (this.data) {
      this.editflag = true;
      this.education = this.data.empdata;
    } else {
      this.editflag = false;
      this.education = {
        id: 0,
        school: "",
        degree: "",
        field: "",
        start: 0,
        end: 0,
        grade: "",
        activity: "",
        description: ""
      };
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  checkDate: boolean = false;
  onSubmit(e: NgForm) {
    if (this.education.end < this.education.start) {
      this.checkDate = true;
      return false;
    } else {
      this.educationService.add(this.education);
    }

    this.dialogRef.close();
  }
}

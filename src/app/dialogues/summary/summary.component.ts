import { Summary } from './../../Model/Summary';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SummaryService } from './summary.service';
import { ProfileComponent } from './../../profile/profile.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public sumserv: SummaryService, public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   )
  
  { }
  clientsummary: Summary ;
  ngOnInit() {
    if (this.data) {
      this.clientsummary= this.data.thesummmary;
    }

else{    this.clientsummary = {
      summary: "",
    };
  }

}
  onsubmit(myform: NgForm) {
    console.log(this.clientsummary);
   this.clientsummary=this.sumserv.Add(this.clientsummary);
   this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

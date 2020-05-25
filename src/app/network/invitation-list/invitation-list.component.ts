import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invitation } from 'src/app/Model/Invitation';
import { NetworkSerivce } from '../network.service';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss']
})
export class InvitationListComponent implements OnInit {

  @Input() invitaions: Invitation[];
  @Output() oneItemAdded = new EventEmitter <Invitation>();




  constructor(public networkSerivce: NetworkSerivce) {

   }

   invitations = this.networkSerivce.invitaions;

  ngOnInit(): void {

    if(!this.invitaions)
    {
      this.invitaions = [
      {imgUrl: '../../assets/images/network/pic2.PNG', title: 'Salah Maher',
      job: 'Trainee at Information Technology Institute (ITI)', mutelfriends: 'Eslam Elkholy and 10 others', responded: false},

      {imgUrl: '../../assets/images/network/pic3.PNG', title: 'Mai Mousa',
      job: 'Software Test Engineer at CSG', mutelfriends: 'Mayada Hefny and 2 others', responded: false},


      {imgUrl: '../../assets/images/network/pc3.PNG', title: 'Asmaa Selem',
      job: 'Trainee at Information Technology Institute (ITI)', mutelfriends: ' Asmaa Selem and 10 others', responded: false},

    ];
    }
  }

  onOneItemAdded(inv: Invitation) {
    this.oneItemAdded.next(inv);
    inv.responded = true;
  }


}

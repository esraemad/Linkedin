import { Connection } from './../Model/connection';
import { Invitation } from './../Model/Invitation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeopleMayKnow } from '../Model/PeopleMayKnow';



@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {


  constructor() {

   }



 @Input() connections: Connection[];


 @Input()  mayknow: PeopleMayKnow;
 

 @Input() mayknows: PeopleMayKnow[];
 @Output() oneItemAdded = new EventEmitter <PeopleMayKnow>();


  invitionConnectionList: Invitation[];

  ngOnInit(): void {



    if ( !this.connections){
    {
      this.connections = [
        {icon: 'group', title: 'Connections',
        num: 10},
      ];
      }
    }



    if( !this.mayknows) {
      this.mayknows = [

        {imgUrl: '../../assets/images/network/p1.PNG', title: 'Ahmed Rafaat',
        job: 'Trainee at Information Technology Institute (ITI)', mutelfriends: 'Eslam Elkholy and 10 others'},

        {imgUrl: '../../assets/images/network/p3.PNG', title: 'Salah Maher',
        job: 'Trainee at Information Technology Institute (ITI)', mutelfriends: 'Eslam Elkholy and 10 others'},

        {imgUrl: '../../assets/images/network/p2.PNG', title: 'Mai Mousa',
        job: 'Software Test Engineer at CSG', mutelfriends: 'Mayada Hefny and 2 others'},

        {imgUrl: '../../assets/images/network/p4.PNG', title: 'Asmaa Selem',
        job: 'Trainee at Information Technology Institute (ITI)', mutelfriends: ' Asmaa Selem and 10 others'},

      ];
      }
  }

  addToconnectionlist(invitation: Invitation) {

    this.invitionConnectionList.push(invitation);

  }

}

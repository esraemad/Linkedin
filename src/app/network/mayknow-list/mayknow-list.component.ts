import { PeopleMayKnow } from './../../Model/PeopleMayKnow';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mayknow-list',
  templateUrl: './mayknow-list.component.html',
  styleUrls: ['./mayknow-list.component.scss']
})
export class MayknowListComponent implements OnInit {


  @Input() mayknows: PeopleMayKnow[];
  @Output() oneItemAdded = new EventEmitter <PeopleMayKnow>();




  constructor() { }

  ngOnInit(): void {

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

}

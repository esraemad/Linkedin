import { Invitation } from './../../Model/Invitation';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NetworkSerivce } from '../network.service';


@Component({
  selector: 'app-invitaton-item',
  templateUrl: './invitaton-item.component.html',
  styleUrls: ['./invitaton-item.component.scss']
})
export class InvitatonItemComponent implements OnInit {

  @Input() invitaion: Invitation;
  @Output() itemAdd = new EventEmitter<Invitation>();

  // networkservice = new NetworkSerivce();

  constructor(public networkservice: NetworkSerivce) {

  }
  ngOnInit(): void {
    this.invitaion.responded = false;
  }


  onItemAdd() {
    this.itemAdd.next(this.invitaion);
    this.networkservice.connectionlist.push(this.invitaion);
    this.invitaion.responded = true;
  }


  onItemIgnore() {
    this.invitaion.responded = true;
  }




}

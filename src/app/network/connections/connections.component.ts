import { Invitation } from './../../Model/Invitation';
import { Connection } from './../../Model/connection';
import { Component, OnInit, Input } from '@angular/core';
import { NetworkSerivce } from '../network.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  connectionlist: Invitation[] = [];
  @Input()  connection: Connection;

  constructor(public networkservice: NetworkSerivce) { }


 //  @Input() connectionlist: Invitation[] = [];


  ngOnInit(): void {

    this.connectionlist = this.networkservice.connectionlist;

  }

}

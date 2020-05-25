import { Component, OnInit, Input } from '@angular/core';
import { Invitation } from 'src/app/Model/Invitation';
import { NetworkSerivce } from '../network.service';

@Component({
  selector: 'app-connectionpage',
  templateUrl: './connectionpage.component.html',
  styleUrls: ['./connectionpage.component.scss']
})
export class ConnectionpageComponent implements OnInit {

  connectionlist: Invitation[] = [];

  // networkservice = new NetworkSerivce();



  constructor(public networkservice: NetworkSerivce) {

  }

  ngOnInit(): void {

    this.connectionlist = this.networkservice.connectionlist;
  }

}

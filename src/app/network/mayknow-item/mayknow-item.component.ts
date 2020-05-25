import { PeopleMayKnow } from './../../Model/PeopleMayKnow';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mayknow-item',
  templateUrl: './mayknow-item.component.html',
  styleUrls: ['./mayknow-item.component.scss']
})
export class MayknowItemComponent implements OnInit {

  @Input()  mayknow: PeopleMayKnow;

  constructor() { }

  ngOnInit(): void {
  }

}

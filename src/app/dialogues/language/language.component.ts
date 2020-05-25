import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor() { }
  languages = ['Arabic', 'English', 'French', 'Spanish'];


  ngOnInit(): void {
  }
}

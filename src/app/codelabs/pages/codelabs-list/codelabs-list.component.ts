import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codelabs-list',
  templateUrl: './codelabs-list.component.html',
  styleUrls: ['./codelabs-list.component.scss']
})
export class CodelabsListComponent implements OnInit {

  codelabs = [
    {
      title: 'Angular Fundamentals',
    },
    {
      title: 'NGRX',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

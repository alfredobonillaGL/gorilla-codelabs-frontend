import { Component, OnInit, Input } from '@angular/core';
import { Codelab } from '@app/core/models/codelab.interface';

@Component({
  selector: 'app-codelab-item',
  templateUrl: './codelab-item.component.html',
  styleUrls: ['./codelab-item.component.scss']
})
export class CodelabItemComponent implements OnInit {

  @Input()
  public codelab: Codelab;

  constructor() { }

  ngOnInit() {
  }

}

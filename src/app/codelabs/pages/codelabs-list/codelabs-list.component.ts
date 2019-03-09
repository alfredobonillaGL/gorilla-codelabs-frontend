import { Component, OnInit } from '@angular/core';
import { CodelabsService } from '@app/core/codelabs/codelabs.service';
import { Codelab } from '@app/core/models/codelab.interface';

@Component({
  selector: 'app-codelabs-list',
  templateUrl: './codelabs-list.component.html',
  styleUrls: ['./codelabs-list.component.scss']
})
export class CodelabsListComponent implements OnInit {

  public codelabs: Array<Codelab>;

  constructor(private codelabsService: CodelabsService) { }

  ngOnInit() {
    this.codelabsService.getCodelabs()
      .subscribe(codelabs =>
        this.codelabs = codelabs
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { Codelab } from '@app/core/models/codelab.interface';
import { Store, select } from '@ngrx/store';
import { State } from '@app/core/models/state.interface';
import { getAllCodelabs } from '@app/core/store/selectors';
import { GetCodelabs } from '@app/core/store/actions/codelabs.actions';

@Component({
  selector: 'app-codelabs-list',
  templateUrl: './codelabs-list.component.html',
  styleUrls: ['./codelabs-list.component.scss']
})
export class CodelabsListComponent implements OnInit {

  public codelabs: Array<Codelab>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
   this.store.pipe(select(getAllCodelabs)).subscribe(
     codelabs => this.codelabs = codelabs
    );
    this.store.dispatch(new GetCodelabs());
  }
}


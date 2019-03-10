import { Component, OnInit } from '@angular/core';
import { CodelabsService } from '@app/core/codelabs/codelabs.service';
import { Codelab } from '@app/core/models/codelab.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-codelab-admin-list',
  templateUrl: './codelab-admin-list.component.html',
  styleUrls: ['./codelab-admin-list.component.scss']
})
export class CodelabAdminListComponent implements OnInit {

  public codelabs: Array<Codelab>;

  constructor(private codelabsService: CodelabsService) { }

  ngOnInit() {
    this.getCodelabs();
  }

  public deleteCodelab(event: Event, codelabId: string): void {
    event.preventDefault();
    this.codelabsService.deleteCodelab(codelabId).subscribe(() => this.getCodelabs());
  }

  public getCodelabs(): Subscription {
    return this.codelabsService.getCodelabs()
    .subscribe(codelabs => {
      this.codelabs = codelabs;
    });
  }
}

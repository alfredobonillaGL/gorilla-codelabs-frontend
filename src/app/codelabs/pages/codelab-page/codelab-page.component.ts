import { Component, OnInit } from '@angular/core';
import { CodelabsService } from '@app/core/codelabs/codelabs.service';
import { ActivatedRoute } from '@angular/router';
import { Codelab } from '@app/core/models/codelab.interface';

@Component({
  selector: 'app-codelab-page',
  templateUrl: './codelab-page.component.html',
  styleUrls: ['./codelab-page.component.scss']
})
export class CodelabPageComponent implements OnInit {

  public codelabId: string;
  public codelab: Codelab;

  constructor(
    private codelabsService: CodelabsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.codelabId = this.route.snapshot.paramMap.get('id');
    this.codelabsService.getCodelab(this.codelabId).subscribe(codelab => {
      this.codelab = codelab;
    });
  }

}

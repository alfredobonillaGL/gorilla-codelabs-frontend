import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Codelab } from '@app/core/models/codelab.interface';
import { Store, select } from '@ngrx/store';
import { State } from '@app/core/models/state.interface';
import { getCodelabById } from '@app/core/store/selectors';
import { GetCodelabs, UpdateCodelab, CreateCodelab } from '@app/core/store/actions/codelabs.actions';

@Component({
  selector: 'app-codelab-form',
  templateUrl: './codelab-form.component.html',
  styleUrls: ['./codelab-form.component.scss']
})
export class CodelabFormComponent implements OnInit {

  public codelabForm: FormGroup;
  public codelabId: string;
  public codelab: Codelab;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.codelabId = this.route.snapshot.paramMap.get('id');
    if (this.codelabId) {
      this.store.dispatch(new GetCodelabs());
      this.getCodelab();
    } else {
      this.codelabForm = this.generateCodelabForm();
    }
  }

  public getCodelab() {
    this.store.pipe(select(getCodelabById, this.codelabId)).subscribe(codelab => {
      this.codelab = codelab;
      this.codelabForm = this.generateCodelabForm(this.codelab);
    });
  }

  public generateCodelabForm(codelab: Codelab = null): FormGroup {
    const form = {
      title: [''],
      author:  [''],
      categories: [''],
      duration: [''],
      level: [''],
      date_posted: [''],
      practice: [''],
      steps: [''],
      description: ['']
    };
    if (codelab) {
      Object.keys(form).forEach(key => form[key] = [codelab[key]]);
    }
    return this.formBuilder.group(form);
  }

  public submitCodelab(): void {
    const codelab = this.codelabForm.value;
    if (this.codelab) {
      codelab._id = this.codelabId;
      this.store.dispatch(new UpdateCodelab(codelab));
    } else {
      this.store.dispatch(new CreateCodelab(codelab));
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodelabsService } from '@app/core/codelabs/codelabs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Codelab } from '@app/core/models/codelab.interface';

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
    private codelabsService: CodelabsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.codelabId = this.route.snapshot.paramMap.get('id');
    this.codelabForm = this.generateCodelabForm();
    if (this.codelabId) {
      this.codelabsService.getCodelab(this.codelabId).subscribe(codelab => {
        this.codelab = codelab;
        this.codelabForm = this.generateCodelabForm(codelab);
      });
    }
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
      console.log('edied codelab', codelab);
      this.codelabsService.updateCodelab(codelab).subscribe(res => this.goBackToAdmin());
    } else {
      this.codelabsService.createCodelab(codelab).subscribe(res => this.goBackToAdmin());
    }
  }

  private goBackToAdmin(): void {
    this.router.navigate(['/admin']);
  }
}


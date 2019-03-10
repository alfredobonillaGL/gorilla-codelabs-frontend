import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CodelabFormComponent } from './pages/codelab-form/codelab-form.component';
import { CodelabAdminListComponent } from './pages/codelab-admin-list/codelab-admin-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CodelabFormComponent, CodelabAdminListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CodelabFormComponent]
})
export class CodelabsAdminModule { }

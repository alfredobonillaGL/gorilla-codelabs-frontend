import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodelabsModule } from './codelabs/codelabs.module';
import { CodelabsAdminModule } from './codelabs-admin/codelabs-admin.module';
import { CodelabsListComponent } from './codelabs/pages/codelabs-list/codelabs-list.component';
import { CodelabFormComponent } from '@app/codelabs-admin/pages/codelab-form/codelab-form.component';
import { CodelabAdminListComponent } from '@app/codelabs-admin/pages/codelab-admin-list/codelab-admin-list.component';

const routes: Routes = [
  {
    path: '',
    component: CodelabsListComponent
  },
  {
    path: 'admin',
    component: CodelabAdminListComponent
  },
  {
    path: 'admin/create',
    component: CodelabFormComponent
  },
  {
    path: 'admin/edit/:id',
    component: CodelabFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CodelabsModule, CodelabsAdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

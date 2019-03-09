import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodelabsListComponent } from './codelabs/pages/codelabs-list/codelabs-list.component';
import { CodelabsModule } from './codelabs/codelabs.module';

const routes: Routes = [
  {
    path: '',
    component: CodelabsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CodelabsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodelabsListComponent } from './pages/codelabs-list/codelabs-list.component';
import { CodelabPageComponent } from './pages/codelab-page/codelab-page.component';
import { CodelabItemComponent } from './components/codelab-item/codelab-item.component';

@NgModule({
  declarations: [CodelabsListComponent, CodelabPageComponent, CodelabItemComponent],
  imports: [
    CommonModule
  ]
})
export class CodelabsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodelabsListComponent } from './pages/codelabs-list/codelabs-list.component';
import { CodelabPageComponent } from './pages/codelab-page/codelab-page.component';
import { CodelabItemComponent } from './components/codelab-item/codelab-item.component';
import { CodelabsWelcomeMessageComponent } from './components/codelabs-welcome-message/codelabs-welcome-message.component';

@NgModule({
  declarations: [CodelabsListComponent, CodelabPageComponent, CodelabItemComponent, CodelabsWelcomeMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CodelabsListComponent,
    CodelabsWelcomeMessageComponent
  ]
})
export class CodelabsModule { }

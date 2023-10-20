import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplesComponent } from './apples.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApplesComponent],
  exports: [ApplesComponent],
})
export class ApplesModule {}

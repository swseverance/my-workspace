import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrotsComponent } from './carrots.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarrotsComponent],
  exports: [CarrotsComponent],
})
export class CarrotsModule {}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BigCardComponent } from './big-card/big-card.component';

@NgModule({
  declarations: [NavbarComponent, BigCardComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [NavbarComponent, BigCardComponent],
})
export class ComponentsModule {}

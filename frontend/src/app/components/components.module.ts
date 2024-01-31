import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BigCardComponent } from './big-card/big-card.component';

@NgModule({
  declarations: [NavbarComponent, BigCardComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, BigCardComponent],
})
export class ComponentsModule {}

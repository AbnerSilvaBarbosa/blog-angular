import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BigCardComponent } from './big-card/big-card.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BigCardComponent,
    CardComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  exports: [NavbarComponent, BigCardComponent, CardComponent, FooterComponent],
})
export class ComponentsModule {}

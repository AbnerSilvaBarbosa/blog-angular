import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { PostContentComponent } from './page/post-content/post-content.component';

@NgModule({
  declarations: [AppComponent, PostContentComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

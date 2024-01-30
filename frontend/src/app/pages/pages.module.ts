import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContentPostComponent } from './content-post/content-post.component';

@NgModule({
  declarations: [
    ContentPostComponent
  ],
  imports: [CommonModule, HomeModule],
  exports: [HomeModule],
})
export class PagesModule {}

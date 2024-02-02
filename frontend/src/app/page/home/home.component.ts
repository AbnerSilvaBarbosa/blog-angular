import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.media-query.scss'],
  standalone: true,
  imports: [CommonModule, ComponentsModule],
})
export class HomeComponent implements OnInit {
  public arrayCard = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}

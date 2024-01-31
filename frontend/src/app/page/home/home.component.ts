import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ComponentsModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

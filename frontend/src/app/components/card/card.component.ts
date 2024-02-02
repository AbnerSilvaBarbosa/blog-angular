import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public arrayCard = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}

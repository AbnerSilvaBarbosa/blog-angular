import { Component, OnInit } from '@angular/core';

type TPost = {
  id: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public postsSmall: TPost[] = [
    { id: 'asda6d78agd76a8d' },
    { id: 'asda6d78agd76a8d' },
    { id: 'asda6d78agd76a8d' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

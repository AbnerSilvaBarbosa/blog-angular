import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  private id: string = '';
  constructor(private activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}

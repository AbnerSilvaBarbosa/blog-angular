import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  private id: string = '';
  public imgSrc: string = 'assets/copy.png';

  constructor(private activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  public changeImg(): void {
    if (this.imgSrc === 'assets/copy.png') {
      this.imgSrc = 'assets/copy-black.png';
    } else {
      this.imgSrc = 'assets/copy.png';
    }
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}

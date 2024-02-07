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

  public copyUrl(): void {
    const url = this.activatedRouter.snapshot.url;
    const copy = `http://localhost:4200/${url[0].path}/${url[1].path}`;

    navigator.clipboard.writeText(copy).then(() => {
      // do somethig for notication the user
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}

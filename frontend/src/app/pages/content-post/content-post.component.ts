import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css'],
})
export class ContentPostComponent implements OnInit {
  public id: string | null = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private navigation: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.navigation.navigate(['/']);
    }, 3000);
  }
}

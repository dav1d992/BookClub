import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  private readonly router = inject(Router);

  public blogs = [
    {
      id: 'hvem-var-sheikh-al-mufid',
      title: 'Hvem var Sheikh al-Mufid',
      date: '10-20-2023',
      image: '../../../assets/al-mufid.png',
      markdownFile: 'assets/blogs/hvem-var-sheikh-al-mufid.md',
    },
    {
      id: 'garlic-bread-with-cheese',
      title: 'Garlic bread with cheese',
      date: '10-20-2022',
      image: '../../../assets/garlic-bread.png',
      markdownFile: 'assets/blogs/garlic-bread-with-cheese.md',
    },
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

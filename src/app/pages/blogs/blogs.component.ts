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
      image: '../../../assets/kitab-al-irshad/mufid-cover.jpg',
      markdownFile: 'assets/blogs/hvem-var-sheikh-al-mufid.md',
    }
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

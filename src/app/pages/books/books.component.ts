import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  private readonly router = inject(Router);

  public books = [
    {
      id: 'kitab-al-irshad',
      title: 'Kitab al-Irshad',
      date: '10-20-2023',
      image: '../../../assets/al-mufid.png',
    },
    {
      id: 'club-meeting',
      title: 'Placeholder bog',
      date: '10-04-2024',
      image: '../../../assets/ai_book_club_meeting_1.png',
    },
    {
      id: 'garlic-bread-with-cheese',
      title: 'Hvidløgsbrød',
      date: '10-20-2022',
      image: '../../../assets/garlic-bread.png',
    },
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

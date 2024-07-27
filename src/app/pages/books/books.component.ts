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
      id: 'human-reader',
      title: 'Kunsten af at læse',
      date: '10-04-2023',
      image: '../../../assets/images/human_reads_book.jpg',
    },
    {
      id: 'david-writer',
      title: 'Breve skriver ikke sig selv',
      date: '30-10-2024',
      image: '../../../assets/images/david_writes_letter.jpg',
    },
    {
      id: 'dusen-talker',
      title: 'At tale foran et stort publikum',
      date: '10-20-2023',
      image: '../../../assets/images/dusen_speech.jpg',
    },
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

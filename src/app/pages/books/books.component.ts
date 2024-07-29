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
      date: '15-09-2023',
      image: '../../../assets/al-mufid.png',
    },
    {
      id: 'human-reader',
      title: 'Dyk ned i Litteraturen',
      date: '10-04-2023',
      image: '../../../assets/images/human_reads_book.jpg',
    },
    {
      id: 'david-writer',
      title: 'Håndskrevne Tanker',
      date: '30-10-2024',
      image: '../../../assets/images/david_writes_letter.jpg',
    },
    {
      id: 'dusen-talker',
      title: 'Tal med Selvsikkerhed',
      date: '10-20-2023',
      image: '../../../assets/images/dusen_speech.jpg',
    },
    {
      id: 'zain-sailor',
      title: 'Frihed på Bølgerne',
      date: '28-02-2024',
      image: '../../../assets/images/zain_sails_boat.jpg',
    },
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

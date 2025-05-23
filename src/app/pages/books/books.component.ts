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
      image: '../../../assets/holy_writing.jpg',
      description:
        "Kitab al-Irshad af Sheikh al-Mufid er et værk, der giver en biografi af de tolv imamer i shi'a-islam. Bogen beskriver bl.a. deres liv, åndelige ledelse og udfordringer.",
    },
    {
      id: 'dusen-talker',
      title: 'Tal med Selvsikkerhed',
      date: '10-02-2023',
      image: '../../../assets/images/dusen_speech.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
    {
      id: 'ali-abu-juice',
      title: 'Kampen om Fred',
      date: '28-06-2024',
      image: '../../../assets/images/ali-in-battle.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
    {
      id: 'human-reader',
      title: 'Dyk ned i Litteraturen',
      date: '10-04-2023',
      image: '../../../assets/images/human_reads_book.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
    {
      id: 'david-writer',
      title: 'Håndskrevne Tanker',
      date: '30-10-2024',
      image: '../../../assets/images/david_writes_letter.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
    {
      id: 'oliver-sauces',
      title: 'Alle består af Væsker - Bind 1',
      date: '15-11-2024',
      image: '../../../assets/images/oliver_sauces.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
  ];

  public viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

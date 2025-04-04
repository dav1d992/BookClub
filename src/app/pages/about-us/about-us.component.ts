import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate('1s', style({ opacity: 1 })), 
      ]),
    ]),
  ],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

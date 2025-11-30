import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly renderer = inject(Renderer2);
  title = 'book-club';

  ngOnInit() {
    this.themeService.initializeTheme(this.renderer);
  }

  toggleDarkMode() {
    this.themeService.toggleTheme(this.renderer);
  }
}

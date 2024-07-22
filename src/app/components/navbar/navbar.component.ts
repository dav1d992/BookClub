import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly renderer = inject(Renderer2);
  public isNavbarOpen = false;

  ngOnInit() {
    this.themeService.initializeTheme(this.renderer);
  }

  public toggleDarkMode() {
    this.themeService.toggleTheme(this.renderer);
  }

  public toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  public closeHamburger() {
    this.isNavbarOpen = false;
  }
}

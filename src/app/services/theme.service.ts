import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  initializeTheme(renderer: Renderer2) {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      renderer.addClass(document.documentElement, 'dark');
    } else {
      renderer.removeClass(document.documentElement, 'dark');
    }
  }

  toggleTheme(renderer: Renderer2) {
    if (document.documentElement.classList.contains('dark')) {
      renderer.removeClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'light');
    } else {
      renderer.addClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}

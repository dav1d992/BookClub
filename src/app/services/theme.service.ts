import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(this.getInitialTheme());
  public theme$ = this.themeSubject.asObservable();

  initializeTheme(renderer: Renderer2) {
    const theme = this.getInitialTheme();
    this.updateTheme(theme, renderer);
  }

  toggleTheme(renderer: Renderer2) {
    const currentTheme = this.themeSubject.getValue();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.updateTheme(newTheme, renderer);
  }

  private updateTheme(theme: string, renderer: Renderer2) {
    if (theme === 'dark') {
      renderer.addClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      renderer.removeClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'light');
    }
    this.themeSubject.next(theme);
  }

  private getInitialTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }
}

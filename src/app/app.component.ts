import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly renderer = inject(Renderer2);
  title = 'book-club';
  markdown: string = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  ngOnInit() {
    this.themeService.initializeTheme(this.renderer);
  }

  toggleDarkMode() {
    this.themeService.toggleTheme(this.renderer);
  }
}

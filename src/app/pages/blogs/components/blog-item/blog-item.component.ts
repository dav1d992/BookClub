import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
	standalone: false,
})
export class BlogItemComponent implements OnInit {
  blogId!: string;
  blogContent!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
      this.loadBlog();
    });
  }

  loadBlog(): void {
    const blogFile = `assets/blogs/${this.blogId}.md`;
    this.http.get(blogFile, { responseType: 'text' }).subscribe((data) => {
      this.blogContent = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}

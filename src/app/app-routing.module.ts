import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BooksComponent } from './pages/books/books.component';
import { BlogItemComponent } from './pages/blogs/components/blog-item/blog-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'blog/:id',
        component: BlogItemComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

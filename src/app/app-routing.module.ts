import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { BlogsComponent } from "./pages/blogs/blogs.component";
import { BooksComponent } from "./pages/books/books.component";
import { BlogItemComponent } from "./pages/blogs/components/blog-item/blog-item.component";
import { TimelineComponent } from "./pages/timeline/timeline.component";
import { RouterModule, type Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us/about-us.component";

export const routes: Routes = [
	{
		path: "about",
		component: AboutUsComponent,
	},
	{
		path: "timeline",
		component: TimelineComponent,
	},
	{
		path: "weblogs",
		component: BlogsComponent,
	},
	{
		path: "weblog/:id",
		component: BlogItemComponent,
	},
	{
		path: "webbooks",
		component: BooksComponent,
	},
	{
		path: "",
		pathMatch: "full",
		component: HomeComponent,
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

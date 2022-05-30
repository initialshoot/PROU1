import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { PagesComponent } from './sections/pages/pages.component';
import { BlogComponent } from './sections/blog/blog.component';
import { ContactComponent } from './sections/contact/contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'pages', component: PagesComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

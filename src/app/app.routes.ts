import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'article/:id', component: ArticleComponent },  
    { path: 'contact', component: ContactFormComponent },
    { path: 'registration', component: SignupFormComponent }, 

    { path: '**', component: NotFoundComponent }

];

import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
    { path: 'article/:id', component: ArticlePageComponent },  // Route dynamique pour afficher les détails d'un article
    { path: '', component: HomePageComponent}, // Route pour la page d'accueil
    { path: 'contact', component: ContactFormComponent },  // Route pour la page contact
    { path: '**', component: NotFoundComponent }

];

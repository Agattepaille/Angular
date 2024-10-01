import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'article/:id', component: ArticlePageComponent },  // Route dynamique pour afficher les détails d'un article
    { path: '', component: HomePageComponent}, // Route pour la page d'accueil
    { path: '**', component: NotFoundComponent }
];

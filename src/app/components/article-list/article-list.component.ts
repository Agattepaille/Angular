import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleComponent } from "../article/article.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleComponent,
    AsyncPipe
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  // on déclare articles en tant qu'observable 
  // puis dans le template on assigne l'observable à la propriété article. Utilsation dans le cas du asyncPipe
  articles$!: Observable<Article[]>;
  private http = inject(HttpClient); 

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
  }

  messageFromChild: string = '';

  handleNotification(article: Article) {
    this.messageFromChild = article.title;
    this.addLikeToArticle(article);
    alert("l'article suivant vient d'être liké : " + this.messageFromChild);
  }

  addLikeToArticle(article: Article): void {
    article.likeCount++;
  }

}

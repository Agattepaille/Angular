import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.models';
import { Observable } from 'rxjs';
import { ArticleComponent } from "../article/article.component";
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

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

  articles$!: Observable<Article[]>;
  private apiService = inject(ApiService);
  messageFromChild: string = '';

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleNotification(article: Article) {
    this.messageFromChild = article.title;
    this.addLikeToArticle(article);
    alert("l'article suivant vient d'être liké : " + this.messageFromChild);
  }

  addLikeToArticle(article: Article): void {
    article.likeCount++;
  }

}

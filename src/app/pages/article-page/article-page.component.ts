import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { ArticleComponent } from "../../components/article/article.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [
    ArticleComponent,
  ],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  article!: Article;
  articleSubscription!: Subscription;

  http = inject(HttpClient);

  getArticleById(id: number) {
    this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data => {
      this.article = data;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.getArticleById(this.articleId);
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { ArticleComponent } from "../../components/article/article.component";
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

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
  // article$!: Observable<Article>;


  private apiService = inject(ApiService);

  articleSubscription!: Subscription;

  ngOnInit() {
    this.articleSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.apiService.getArticleById(this.articleId).subscribe((data => {
        this.article = data
      })
    );

    });
  }

  
}

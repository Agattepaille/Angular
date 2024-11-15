import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/article.models';
import { ArticleComponent } from "../../components/article/article.component";
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
  private articleId!: number;
  article!: Article;
  private articleSubscription!: Subscription;

  // article$!: Observable<Article>;
  route: ActivatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

  this.apiService.getArticleById(this.articleId).subscribe((data => {
      this.article = data;
      })
    );
  }
  
  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}

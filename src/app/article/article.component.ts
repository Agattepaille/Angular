import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article.models';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter<any>();

  sendNotification(article: Article) {
    this.notifyParent.emit(article);
  }
}

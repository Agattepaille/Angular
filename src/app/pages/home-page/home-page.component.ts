import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from "../../models/article.models";
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleListComponent } from "../../components/article-list/article-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterLink,
    ArticleComponent,
    ArticleListComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


}

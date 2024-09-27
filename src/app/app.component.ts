import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListComponent } from "../app/list/list.component";
import { ArticleComponent } from "./article/article.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    ArticleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 title: string ="Une liste pour faire des trucs";
}
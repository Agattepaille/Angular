import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomePageComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 
}
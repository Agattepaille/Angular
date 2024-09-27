import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ItemComponent,
    ButtonComponent,
    CommonModule, 
    FormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  itemToAdd : string = "";
}

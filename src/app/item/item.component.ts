import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

export interface Item {
  text: string;
  id: number;
  isCompleted: boolean;
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  item: Item = {
    text: '',
    id: 1,
    isCompleted: false
  }

  toggleItem(): void {
    this.item.isCompleted = !this.item.isCompleted;
  }
}

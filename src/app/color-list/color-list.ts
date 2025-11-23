import { Component, Input } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { getRandomColor } from '../utils/utils';
import { Color } from '../color/color';

@Component({
  selector: 'app-color-list',
  imports: [Color],
  templateUrl: './color-list.html',
  styleUrl: './color-list.css',
})
export class ColorList implements OnInit{
  @Input({required: true}) currectedColor! : string;
  @Input({required: true}) list_size!: number

  colors: string[] = [];
  
  private shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      // בחר אינדקס רנדומלי לפני המיקום הנוכחי
      const j = Math.floor(Math.random() * (i + 1));
      // החלף בין האלמנטים
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

    ngOnInit() {
      this.colors.push(this.currectedColor);
      for(let i = 1; i< this.list_size; i++)
      {
        this.colors.push(getRandomColor())
      }
      this.shuffleArray(this.colors);
    }
  
  
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getRandomColor } from './utils/utils';
import { ColorList } from './color-list/color-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('guess-color');
  currectedColor = getRandomColor()
}

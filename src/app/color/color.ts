import { Component ,Input} from '@angular/core';
@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  @Input({required:true}) color!: string;
  @Input({required:true}) border!: string;
  borderColor = 'black';

  HandleClick(){
    this.borderColor = this.border
  }

}

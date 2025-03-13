
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-favorite-colors',
  templateUrl: './favorite-colors.component.html',
  styleUrls: ['./favorite-colors.component.css']
})
export class FavoriteColorsComponent {
  favoriteColors = signal<string[]>([]);
  newColor = signal<string>(''); 

  addColor() {
    if (this.newColor().trim()) {
      this.favoriteColors.update(colors => [...colors, this.newColor()]);
      this.newColor.set('');
    }
  }
}

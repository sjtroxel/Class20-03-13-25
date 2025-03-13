import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  standalone: true,
  imports: [],
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.css'
})
export class ClickCounterComponent {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }
}

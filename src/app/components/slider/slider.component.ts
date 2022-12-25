import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slide: number = 0;

  nextSlide() {
    this.slide++;
  }

  previousSlide() {
    this.slide--;
  }
}
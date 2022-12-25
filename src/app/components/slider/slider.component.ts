import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slide: number = 0;
  nrOfSlides: number = 3;

  nextSlide() {
    this.slide++;
    this.slide = this.mod(this.slide, this.nrOfSlides)
  }

  previousSlide() {
    this.slide--;
    this.slide = this.mod(this.slide, this.nrOfSlides)
  }

  mod(a:number, b:number) {
    return ((a % b) + b) % b
  }
}
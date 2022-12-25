import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider-buttons',
  templateUrl: './slider-buttons.component.html',
  styleUrls: ['./slider-buttons.component.scss']
})
export default class SliderButtonsComponent {
  @Output() leftClick = new EventEmitter<void>();
  @Output() rightClick = new EventEmitter<void>();

  onLeftClick(): void {
    this.leftClick.emit();
  }

  onRightClick(): void {
    this.rightClick.emit();
  }
}

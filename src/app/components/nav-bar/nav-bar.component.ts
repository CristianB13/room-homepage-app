import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('menu', [
      state('close', style({
        height: '0'
      })),
      state('open', style({
        height: '100px'
      })),
      transition('close => open', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavBarComponent {
  open: boolean = false;
}

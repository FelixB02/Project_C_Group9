import { Component } from '@angular/core';
import { IPics, portpics } from './portpic';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portpics: Array<IPics> = portpics;

}

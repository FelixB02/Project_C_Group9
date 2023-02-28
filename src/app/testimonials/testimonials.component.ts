import { Component } from '@angular/core';
import { testimonials,Itestimonials } from '../testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials:Array<Itestimonials> = testimonials;
}

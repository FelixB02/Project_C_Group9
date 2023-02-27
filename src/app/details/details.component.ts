import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { portpics,IPics} from '../portfolio/portpic';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
images:IPics={} as IPics;
id:number=0;

constructor(private route:ActivatedRoute){}

ngOnInit():void{
  this.route.params.subscribe((params:Params)=>{
    this.id = +params['id'];
    this.images = portpics [this.id];
  });
}
}

import { Component, OnInit, Input } from "@angular/core";
import { RestaurentService } from './restaurent.service';
import { Foodies } from './foodies';
import { RouterLink } from '@angular/router';

@Component({
  selector : 'city',
  template:`
  <a (routerLink)="['/collection', city.id]" >
  <li class='list-group-item'>
      <span class='badge'>Restorents in </span>
      {{ city.name }}
  </li>
  </a>
  `,

  providers:[
      RestaurentService
  ]
})
export class CityComponent implements OnInit {
  @Input() city : Foodies;


  constructor(){
     
  }

  ngOnInit(){
     
  }

  onClickDetail(data : Location){
     
  }
  
}
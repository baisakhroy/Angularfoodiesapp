import { RestaurantDetails } from './restaurant-details';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from "@angular/forms";
import { RestaurentService } from "./restaurent.service";
import { Observable } from "rxjs/Observable";
import { LocationResponse } from './location-response';
import { Foodies } from './foodies';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector:'searcher',
  templateUrl:'./search.component.html',
  styles:[`

.thumbnail{
  height:200px;
  width:200px;
  float:left;
}

.search-box{
  margin-top:10px;
  background-color:white;
}

.searchbtn{
margin-top:10px;
}
.promobtn{
  margin-top:10px;
  margin-right:10px;
}
`]
})
export class SearchComponent implements OnInit{
  private keyword1:string;
  private keyword2:string;
  searches :any;
constructor(private _restaurentservice :RestaurentService){}
  ngOnInit(){
    
  }
city:any; //array
collections:any; //array
restaurant_details: any; //array
  cuisines_data:any;
  searchRestaurent(keyword1:string,keyword2:string){
      
        return this._restaurentservice.getRestaurents(keyword1,keyword2).subscribe(
          restaurant_data=> {this.restaurant_details = restaurant_data['restaurants']; 
          console.log(restaurant_data);}
        );
    }
    
  

      //searchCollection(city_id:number):any{
       // console.log(city_id);
        //return this._restaurentservice.getcollection(city_id).subscribe(
         // c_id=> {this.collections = c_id.json()['collections']; 
          //console.log('search:');
         // console.log(c_id);
         // console.log(c_id.json()['collections']);} 
       // );
     // }
//--------------------------------------------------------------------------------------------------------------------
  // get_restro_from_collectionid(collection_id:number):any{
  //   console.log(collection_id);
  //   return this._restaurentservice.getRestros(collection_id).subscribe(
  //     restros=> {this.retros = restros.json(); 
  //     console.log('search:');
  //     console.log();
  //     console.log(c_id.json()['collections']);}
  //   );
  // }

  showCuisines(keyword:number){
    return this._restaurentservice.getCuisines(keyword).subscribe(
        cuisines_data=> {this.cuisines_data = cuisines_data;
           console.log(cuisines_data);}
    )
  }


}
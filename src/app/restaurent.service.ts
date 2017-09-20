import { RestaurentSearch } from './restaurentsearch';
import { Cuisines } from './cuisines';
import { LocationResponse } from './location-response';
import { Injectable }    from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Foodies } from './foodies';
@Injectable()
export class RestaurentService{
    
   constructor(private http: Http) { }
   tmp: any;
   getRestaurents(keyword1:string,keyword2:string){
    let headers = new Headers({ 'user-key' : '538d40e26a1cb0969841080100b796ec' });
    let requestOpt = new RequestOptions({ headers: headers });
 
    //return  this.http.get('https://developers.zomato.com/api/v2.1/search?q=' + keyword1 +'%20in%20'+keyword2, requestOpt)
    return  this.http.get('https://developers.zomato.com/api/v2.1/search?q=' + keyword1, requestOpt)
            .map((response : Response) => response.json() as RestaurentSearch[]);
            
    // console.log('check:');
    //         console.log(this.tmp);
    // return this.tmp;
//https://developers.zomato.com/api/v2.1/collections?city_id=1   ----> collections url
  }
  getcollection(keyword:string):any{
    let headers = new Headers({ 'user-key' : '538d40e26a1cb0969841080100b796ec' });
    let requestOpt = new RequestOptions({ headers: headers });
      return this.http.get('https://developers.zomato.com/api/v2.1/collections?city_id=' +keyword, requestOpt);    
  }



  getCuisines(keyword:number): Observable<Cuisines[]>{
    let headers = new Headers({ 'user-key' : '538d40e26a1cb0969841080100b796ec' });
    let requestOpt = new RequestOptions({ headers: headers });
 
    return this.http.get('https://developers.zomato.com/api/v2.1/cuisines?city_id='+ keyword, requestOpt)
            .map((response : Response) => response.json() as Cuisines[]);
  }
   
}
import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http, private jsonp: Jsonp) { }
  
  fetchData(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=8b44fb90f177e13613d8a735abf8fc61')
      .map(
            (res) => {
              let data = res.json();
              return data;
            }
        );
  }
  
  getDeck(){
        return this.http.get('http://deckofcardsapi.com/api/deck/new/draw/?count=2').map(
            (res) =>{
              let data = res.json();
              return data.cards;
            }
        );
    }

}

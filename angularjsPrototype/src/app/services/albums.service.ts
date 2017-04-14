import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService{
  constructor(private http: Http){
    console.log("AlbumsService initialized")
  }

  getAlbums(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&APPID=00210233b9ebb9d803b9cfcb463b20ad').map(res => res.json())
  }

}

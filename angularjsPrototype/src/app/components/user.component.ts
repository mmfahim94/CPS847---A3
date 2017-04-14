import { Component } from '@angular/core';
import { AlbumsService } from '../services/albums.service';

@Component({
    moduleId: module.id, //needed to enable relative path for templateUrl
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [AlbumsService]
})
export class UserComponent  {
    name: string;
    title: string;
    address: address;
    skills: string[];
    showSkills: boolean;
    albums: Weather;
    temp: number; 
    main: string;
    constructor(private albumsService: AlbumsService){
      console.log("In constructor")
      this.name = 'Jane';
      this.title = 'Developer';
      this.address = {
        street : 'Church St.',
        city : 'Toronto',
        province: 'ON'
      }
      this.skills = ['C++', 'JavaScript', 'AngularJS']
      this.showSkills = false;

      this.albumsService.getAlbums().subscribe(albums => {
        console.log(albums)
        this.temp = albums.main.temp;
        this.main = albums.weather[0].main;
        console.log(albums.weather)
      });
    }
}
 
interface address{
  street: string;
  city: string;
  province: string;
}

interface Weather{
  weather: [{main: string}];
  main: {temp:number};
}


 

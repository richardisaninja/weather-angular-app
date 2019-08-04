import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  apiKey = '6306ad3f27c88879e641bd2b6569f2fd';
  url;

  constructor(private http:HttpClient) {
    this.url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
   }

  getWeather(lat, lon){
    
    return this.http.get(this.url+this.apiKey+'/'+lat+','+lon)
    
  }
}

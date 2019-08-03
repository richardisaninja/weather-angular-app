import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  apiKey = '37ac4cc84a0e23f17b6986f7071ea561';
  url;

  constructor(private http:HttpClient) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?';
   }

  getWeather(lat, lon){
    
    return this.http.get(this.url+'lat='+lat+'&'+'lon='+lon+'&APPID='+this.apiKey+'&units=imperial')
    
  }
}

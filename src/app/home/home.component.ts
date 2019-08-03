import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
//get location


  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  success(pos) {
    let crd = pos.coords;
    localStorage.setItem('lat', crd.latitude);
    localStorage.setItem('lon', crd.longitude);
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  //end location section
 


  
  weather: Object;

  constructor(private data: WeatherDataService) { }

  ngOnInit() {
    //call location service
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    let lon = localStorage.getItem('lon');
    let lat = localStorage.getItem('lat');
    

    //call weather api
    this.data.getWeather(lat, lon).subscribe(response=>{
      console.log(response);
      this.weather = response;
    })
  }

}

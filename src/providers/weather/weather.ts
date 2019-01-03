import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '89d2e39ea8824fd39cd132257180106';
  url;


  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    //this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    //this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      this.url = 'http://api.apixu.com/v1/current.json?key=';
  }

  getWeather(city){
    //return this.http.get(this.url+'/'+state+'/'+city+'.json')
    //.map(res => res.json());
    return this.http.get(this.url+this.apiKey+'&q='+city)
    .map(res => res.json());
  }
}

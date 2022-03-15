import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  countryAll = 'https://restcountries.com/v2/all';
  country = 'https://restcountries.com/v2/name/{name}';
  region = 'https://restcountries.com/v2/continent/{region}';
  

  getAllCountry() {
    return this.http.get(this.countryAll);
  }
  getCountry(name) {
    return this.http.get(this.country + name );
  }
   getRegion(region) {
    return this.http.get(`${this.http}/region/${region}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restaurant } from '../models/Restaurant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-control': 'no-cache,no-store', //will fix ie cache issue
    'Expires': '0',
    'Pragma': 'no-cache'
  })
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  private apiUrl: any;
  public searchTerm: any;

  public restaurantData: restaurant[];
  title = 'JustEatTest';
  constructor(private http: HttpClient) {
    this.apiUrl = (<any>window).apiUrl ? (<any>window).apiUrl : '/api/main/';
  }

  ngOnInit() {
    var __this = this;
    this.GetRestaurantData("se19").subscribe(data => {
      __this.restaurantData = data;
    });
  }

  searchList() {
    var __this = this;
    this.GetRestaurantData(this.searchTerm).subscribe(data => {
      __this.restaurantData = data;
    });
  }
  GetRestaurantData(areaCode: any): Observable<restaurant[]> {
    return this.http.get<restaurant[]>(this.apiUrl + 'Restaurants?areaCode=' + areaCode + '&tsp=' + new Date().getTime());
  }
}

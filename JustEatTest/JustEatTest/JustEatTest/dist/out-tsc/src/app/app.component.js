var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-control': 'no-cache,no-store',
        'Expires': '0',
        'Pragma': 'no-cache'
    })
};
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'JustEatTest';
        this.apiUrl = window.apiUrl ? window.apiUrl : '/api/main/';
    }
    AppComponent.prototype.ngOnInit = function () {
        var __this = this;
        this.GetRestaurantData("se19").subscribe(function (data) {
            __this.restaurantData = data;
        });
    };
    AppComponent.prototype.searchList = function () {
        var __this = this;
        this.GetRestaurantData(this.searchTerm).subscribe(function (data) {
            __this.restaurantData = data;
        });
    };
    AppComponent.prototype.GetRestaurantData = function (areaCode) {
        return this.http.get(this.apiUrl + 'Restaurants?areaCode=' + areaCode + '&tsp=' + new Date().getTime());
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
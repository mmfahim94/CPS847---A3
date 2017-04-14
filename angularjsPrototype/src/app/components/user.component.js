"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var albums_service_1 = require('../services/albums.service');
var UserComponent = (function () {
    function UserComponent(albumsService) {
        var _this = this;
        this.albumsService = albumsService;
        console.log("In constructor");
        this.name = 'Jane';
        this.title = 'Developer';
        this.address = {
            street: 'Church St.',
            city: 'Toronto',
            province: 'ON'
        };
        this.skills = ['C++', 'JavaScript', 'AngularJS'];
        this.showSkills = false;
        this.albumsService.getAlbums().subscribe(function (albums) {
            console.log(albums);
            _this.temp = albums.main.temp;
            _this.main = albums.weather[0].main;
            console.log(albums.weather);
        });
    }
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            providers: [albums_service_1.AlbumsService]
        }), 
        __metadata('design:paramtypes', [albums_service_1.AlbumsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// Annotation section
var TweetsService = (function () {
    function TweetsService() {
        this.names = ["Mongo", "Express", "Angular", "Node"];
    }
    return TweetsService;
})();
var TwitterAppComponent = (function () {
    function TwitterAppComponent(tweetsService) {
        this.name = 'Vizualizacija postova sa Twitter društvene mreže';
        this.description = 'Diplomski rad, Filip Kuster';
        this.meanStack = tweetsService.names;
        this.tweets = [];
        this.counter = 0;
    }
    TwitterAppComponent.prototype.addTweet = function (tweet) {
        this.tweets.push({ 'tweet': tweet });
        this.counter++;
    };
    TwitterAppComponent.prototype.addUser = function (user) {
        this.tweets.slice(-1)[0].user = user;
    };
    TwitterAppComponent = __decorate([
        angular2_1.Component({
            selector: 'twitter-app',
            appInjector: [TweetsService]
        }),
        angular2_1.View({
            templateUrl: 'views/map.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [TweetsService])
    ], TwitterAppComponent);
    return TwitterAppComponent;
})();
angular2_1.bootstrap(TwitterAppComponent);

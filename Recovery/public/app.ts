
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
// Annotation section
class TweetsService {
  names: Array<string>;
  constructor() {
    this.names = ["Mongo", "Express", "Angular", "Node"];
  }
}
@Component({
  selector: 'twitter-app',
  appInjector: [TweetsService]
})
@View({
  templateUrl: 'views/map.html',
  directives: [NgFor, NgIf]
})
// Component controller
class TwitterAppComponent {
  name: string;
  description: string;
  meanStack: Array<string>;
  tweets: Array<object>;

  counter: integer;
  constructor(tweetsService: TweetsService) {
    this.name = 'Vizualizacija postova s Twitter društvene mreže';
    this.description= 'Diplomski rad, Filip Kuster';
    this.meanStack = tweetsService.names;
    this.tweets=[];
    this.counter=0;

  }
  addTweet(tweet: string) {
    this.tweets.push({'tweet':tweet });
    this.counter++;
}
addUser(user: string) {
   this.tweets.slice(-1)[0].user = user;
}
}

bootstrap(TwitterAppComponent);

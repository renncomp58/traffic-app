import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-clear',
    templateUrl: 'clear.html'
})
export class ClearPage implements OnInit {

    clear: any;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {

    }

        fetchTweets(){
       return this.twitterService.getClear();
    }

    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.clear = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    ngOnInit() {
        this.fetchTweets().subscribe(data=> {
            this.clear = data;
            console.log(data);
        }, error=> {

        });

    }

}

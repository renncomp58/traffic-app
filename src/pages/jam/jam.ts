import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-jam',
    templateUrl: 'jam.html'
})
export class JamPage implements OnInit {

    jam: any;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }

    fetchTweets(){
        return this.twitterService.getJam();
    }

    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.jam = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    ngOnInit() {
        this.fetchTweets().subscribe(data=> {
            this.jam = data;
            console.log(data);
        }, error=> {

        });

    }

}

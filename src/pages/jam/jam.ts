import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-jam',
    templateUrl: 'jam.html'
})
export class JamPage implements OnInit {

    jam: any;
    show: boolean;
//Default constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }

    //FetchTweets function
    fetchTweets() {
        return this.twitterService.getJam();
    }

    //Refreshes page on Refresh
    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.jam = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    //Display fetched tweets on initializing page
    ngOnInit() {
        this.show = true;
        this.fetchTweets().subscribe(data=> {
            this.jam = data;
            this.show = false;
            console.log(data);
        }, error=> {
            this.show = false;
        });

    }

}

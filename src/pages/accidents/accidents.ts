import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-accidents',
    templateUrl: 'accidents.html'
})
export class AccidentsPage implements OnInit {

    accidents: any;
    show: boolean;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }

// fetching tweets function
    fetchTweets() {
        return this.twitterService.getAccidents();
    }

    //On refreshing the accidents page
    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.accidents = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    //On initializing the accidents page
    ngOnInit() {
         this.show = true;
        this.twitterService.getAccidents().subscribe(data=> {
            this.accidents = data;
            this.show = false;
            console.log(data);
        }, error=> {

        this.show = false;

        });
    }

}

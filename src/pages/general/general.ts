import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-general',
    templateUrl: 'general.html'
})
export class GeneralPage implements OnInit {

    general: any

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }

    fetchTweets() {
        return this.twitterService.getGeneral();
    }

    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.general = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    ngOnInit() {
        this.fetchTweets().subscribe(data=> {
            this.general = data;
            console.log(data);
        }, error=> {

        });

    }
}

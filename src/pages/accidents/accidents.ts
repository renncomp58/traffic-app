import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-accidents',
    templateUrl: 'accidents.html'
})
export class AccidentsPage implements OnInit {

    accidents: any;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }


    fetchTweets(){
       return this.twitterService.getAccidents();
    }

    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.accidents = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    ngOnInit() {
        this.fetchTweets().subscribe(data=> {
            this.accidents = data;
            console.log(data);
        }, error=> {

        });
    }

}

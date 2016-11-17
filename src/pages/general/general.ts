import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-general',
    templateUrl: 'general.html'
})
export class GeneralPage implements OnInit {

    general: any;
    show: boolean;

//default constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService) {


    }


    doInfinite(infiniteScroll) {
        console.log('Begin async operation');


        // setTimeout(() => {
        //     for (var i = 0; i < 20; i++) {
        //         this.general.fetchTweets(this.general.length);
        //     }
        //
        //     console.log('Async operation has ended');
        //     infiniteScroll.complete();
        // }, 500);
    }

    //Fetching general tweets function
    fetchTweets() {
        return this.twitterService.getGeneral();
    }

    //On refreshing the general page
    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.general = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    //On application initialization
    ngOnInit() {
        this.show = true;
        this.fetchTweets().subscribe(data=> {
            this.general = data;
            this.show = false;

            console.log(data);
        }, error=> {
            console.log('Sorry Something happened');
            this.show = false;
        });

    }
}

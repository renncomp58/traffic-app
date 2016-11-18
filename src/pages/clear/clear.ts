import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import {ToastController} from "ionic-angular";

@Component({
    selector: 'page-clear',
    templateUrl: 'clear.html'
})
export class ClearPage implements OnInit {

    clear: any;
    show: boolean;

    //constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController) {

    }

    //fetching tweets function
    fetchTweets() {
        return this.twitterService.getClear();
    }

    //On refreshing Clear page
    doRefresh(refresher) {
        this.fetchTweets().subscribe(data=> {
            this.clear = data;
            refresher.complete();
            console.log(data);
        }, error=> {

        });
    }

    //On initializing Clear page function show the data
    ngOnInit() {
        this.show = true;
        this.fetchTweets().subscribe(data=> {
            this.clear = data;
            this.show = false;
            console.log(data);
        }, error=> {
            this.show = false;
            let toast = this.toastCtrl.create({
                message: 'Sorry something went wrong or No available accidents at this moment',
                duration: 5000
            });
            toast.present();
        });

    }

}

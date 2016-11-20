import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import {ToastController} from "ionic-angular";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-clear',
    templateUrl: 'clear.html'
})
export class ClearPage implements OnInit {

    clear: any;
    show: boolean;

    //constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController, public modalCtrl: ModalController ) {}

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

    //modal function
    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentClearPage, characterNum);
        modal.present();
    }

}

//Clear Modal component
@Component({
    template: `
<ion-header>
  <ion-toolbar color ="secondary">
    <ion-title>
      OfflineHelp
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
      	Close
        &nbsp;<ion-icon name="md-close"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content padding >
<ion-list>
<ion-item>
<div>
        <img src="{{character.clearimage}}" style="height:300px;">
     </div>
        <h2>{{character.clearpagename}}</h2>
        <p style="white-space: normal;">{{character.cleardescription}}</p>
</ion-item>
</ion-list>
</ion-content>
`
})
export class ModalContentClearPage {
    character;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {
        var characters = [
            {
                clearpagename: 'Clear Page ',
                cleardescription: 'Clear page shows tweets that explain that the road is clear.',
                clearimage: 'assets/images/clear.png',
            },

        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

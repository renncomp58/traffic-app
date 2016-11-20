import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import {ToastController} from "ionic-angular";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-jam',
    templateUrl: 'jam.html'
})
export class JamPage implements OnInit {

    jam: any;
    show: boolean;
//Default constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
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
            let toast = this.toastCtrl.create({
                message: 'Sorry something went wrong or No available accidents at this moment',
                duration: 5000
            });
            toast.present();
        });

    }

    //modal function
    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentJamPage, characterNum);
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
        <img src="{{character.jamimage}}" style="height:300px;">
     </div>
        <h2>{{character.jampagename}}</h2>
        <p style="white-space: normal;">{{character.jamdescription}}</p>
</ion-item>
</ion-list>
</ion-content>
`
})
export class ModalContentJamPage {
    character;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {
        var characters = [
            {
                jampagename: 'Clear Page ',
                jamdescription: 'Clear page shows tweets that explain that the road is clear.',
                jamimage: 'assets/images/clear.png',
            },

        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

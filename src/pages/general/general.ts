import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwitterService } from "../../providers/twitter-service";
import { ToastController } from "ionic-angular";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-general',
    templateUrl: 'general.html'
})
export class GeneralPage implements OnInit {

    general: any;
    show: boolean;

//default constructor
    constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController, public modalCtrl: ModalController) {}


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
            let toast = this.toastCtrl.create({
                message: 'Sorry something went wrong or No available accidents at this moment',
                duration: 5000
            });
            toast.present();
            this.show = false;
        });

    }


    //modal function
    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentGeneralPage, characterNum);
        modal.present();
    }
}

// General modal component
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
        <img src="{{character.generalimage}}" style="height:300px;">
     </div>
        <h2>{{character.generalpagename}}</h2>
        <p style="white-space: normal;">{{character.generaldescription}}</p>
</ion-item>
</ion-list>
</ion-content>
`
})
export class ModalContentGeneralPage {
    character;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {
        var characters = [
            {
                generalpagename: 'General Page ',
                generaldescription: 'General page shows all categories of tweets.',
                generalimage: 'assets/images/general.png',
            },

        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

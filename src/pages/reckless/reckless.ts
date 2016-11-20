import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import {ToastController} from "ionic-angular";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-reckless',
  templateUrl: 'reckless.html'
})
export class RecklessPage implements OnInit {

  reckless: any;
  show: boolean;
//Default constructor
  constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController, public modalCtrl: ModalController) {}

  //FetchTweets function
  fetchTweets() {
    return this.twitterService.getReckless();
  }

  //Refreshes page on Refresh
  doRefresh(refresher) {
    this.fetchTweets().subscribe(data=> {
      this.reckless = data;
      refresher.complete();
      console.log(data);
    }, error=> {

    });
  }

  //Display fetched tweets on initializing page
  ngOnInit() {
    this.show = true;
    this.fetchTweets().subscribe(data=> {
      this.reckless = data;
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
    let modal = this.modalCtrl.create(ModalContentRecklessPage, characterNum);
    modal.present();
  }
}

//Jam Modal component
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
        <img src="{{character.recklessimage}}" style="height:300px;">
     </div>
        <h2>{{character.recklesspagename}}</h2>
        <p style="white-space: normal;">{{character.recklessdescription}}</p>
</ion-item>
</ion-list>
</ion-content>
`
})
export class ModalContentRecklessPage {
  character;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    var characters = [
      {
        recklesspagename: 'Reckless Page ',
        recklessdescription: 'Reckless page shows tweets that explain that the road is clear.',
        recklessimage: 'assets/images/reckless.png',
      },

    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

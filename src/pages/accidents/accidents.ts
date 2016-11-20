import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import  {ToastController} from "ionic-angular";
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
    selector: 'page-accidents',
    templateUrl: 'accidents.html'
})
export class AccidentsPage implements OnInit {

    accidents: any;
    show: boolean;

    constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
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
            let toast = this.toastCtrl.create({
                message: 'Sorry something went wrong or No available accidents at this moment',
                duration: 5000,
                cssClass: "toast-message"
            });
            toast.present();

        });
    }

    //modal function
    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentAccidentPage, characterNum);
        modal.present();
    }

}

//modal component
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
        <img src="{{ character.accidentimage }}" style="height:300px;">
     </div>
        <h2>{{ character.accidentpagename }}</h2>
        <p style="white-space: normal;">{{ character.accidentdescription }}</p>
</ion-item>
</ion-list>
</ion-content>
`
})
export class ModalContentAccidentPage {
    character;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {
        var characters = [
            {
                accidentpagename: 'Accident Page ',
                accidentdescription: 'Accident page shows tweets about accidents.',
                accidentimage: 'assets/images/accident.png',
            },

        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
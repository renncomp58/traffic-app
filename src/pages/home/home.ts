import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentHomePage, characterNum);
        modal.present();
    }
}


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
        <img src="{{character.homeimage}}" style="height:300px;">
     </div>
        <h2>{{character.homepagename}}</h2>
        <p style="white-space: normal;">{{character.homedescription}}</p>
</ion-item>
<ion-item>
<div>
        <img src="{{character.menuimage}}" style="height:300px;">
     </div>
        <h2>{{character.menuname}}</h2>
        <p style="white-space: normal;">{{character.menudescription}}</p>
</ion-item>
<ion-item>
<div>
        <img src="{{character.proceedimage}}" style="height:300px;">
     </div>
        <h2>{{character.proceedname}}</h2>
        <p style="white-space: normal;">{{character.proceeddescription}}</p>

</ion-item>
</ion-list>
	
      <!--<ion-list>-->
      <!--<ion-item>-->
        <!--{{item.title}}-->
        <!--<ion-note item-right>-->
          <!--{{item.note}}-->
        <!--</ion-note>-->
        <!--</ion-item>-->
        <!--</ion-list>-->
</ion-content>
`
})
export class ModalContentHomePage {
    character;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {
        var characters = [
            {
                homepagename: 'HomePage ',
                homedescription: 'Home page is the first page that loads when the application is launched.',
                homeimage: 'assets/images/home.png',
                menuname: 'MenuButton ',
                menudescription: 'Click menu to access the Traffic updates category',
                menuimage: 'assets/img/home_menu.jpg',
                proceedname: 'ProceedButton ',
                proceeddescription: 'Click proceed button to access the traffic categories',
                proceedimage: 'assets/img/home_proceed.jpg',
            },


            // {
            //     name: 'Samwise Gamgee',
            //     quote: 'What we need is a few good taters.',
            //     image: 'assets/img/avatar-samwise.jpg',
            //     items: [
            //         { title: 'Race', note: 'Hobbit' },
            //         { title: 'Culture', note: 'Shire Folk' },
            //         { title: 'Nickname', note: 'Sam' }
            //     ]
            // }
        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
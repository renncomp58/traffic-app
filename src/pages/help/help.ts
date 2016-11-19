import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');

  }


}

import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-jam',
    templateUrl: 'jam.html'
})
export class JamPage implements OnInit {

    constructor(public navCtrl: NavController, public twitterService:TwitterService) {
    }

    ngOnInit() {

    }

}

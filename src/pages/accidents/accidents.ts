import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-accidents',
    templateUrl: 'accidents.html'
})
export class AccidentsPage implements OnInit {

    accidents: any;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {
    }

    ngOnInit() {
        this.twitterService.getAccidents().subscribe(data=> {
            this.accidents = data;
        }, error=> {

        });
    }

}

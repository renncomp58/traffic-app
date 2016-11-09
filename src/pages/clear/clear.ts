import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";

@Component({
    selector: 'page-clear',
    templateUrl: 'clear.html'
})
export class ClearPage implements OnInit {

    clear: any;

    constructor(public navCtrl: NavController, public twitterService: TwitterService) {

    }

    ngOnInit() {
        this.twitterService.getClear().subscribe(data=> {
            this.clear = data;
            console.log(data);
        }, error=> {

        });

    }

}

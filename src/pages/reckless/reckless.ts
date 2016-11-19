import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {TwitterService} from "../../providers/twitter-service";
import {ToastController} from "ionic-angular";
@Component({
  selector: 'page-reckless',
  templateUrl: 'reckless.html'
})
export class RecklessPage implements OnInit {

  reckless: any;
  show: boolean;
//Default constructor
  constructor(public navCtrl: NavController, public twitterService: TwitterService, public toastCtrl: ToastController) {
  }

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
}
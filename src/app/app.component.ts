import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from "../pages/home/home";
import {AccidentsPage} from "../pages/accidents/accidents";
import {ClearPage} from "../pages/clear/clear";
import {GeneralPage} from "../pages/general/general";
import {JamPage} from "../pages/jam/jam";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform) {
        this.initializeApp();

        this.pages = [
            {title: 'Home', component: HomePage},
            {title: 'Accidents', component: AccidentsPage},
            {title: 'Clear', component: ClearPage},
            {title: 'General', component: GeneralPage},
            {title: 'Jam', component: JamPage},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}

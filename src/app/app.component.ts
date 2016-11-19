import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from "../pages/home/home";
import {GeneralPage} from "../pages/general/general";
import {AccidentsPage} from "../pages/accidents/accidents";
import {ClearPage} from "../pages/clear/clear";
import {JamPage} from "../pages/jam/jam";
import {HelpPage} from "../pages/help/help";
import {RecklessPage} from "../pages/reckless/reckless";


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
            {title: 'General', component: GeneralPage},
            {title: 'Accidents', component: AccidentsPage},
            {title: 'Clear', component: ClearPage},
            {title: 'Jam', component: JamPage},
            {title: 'Reckless', component: RecklessPage}
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

import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AccidentsPage} from "../pages/accidents/accidents";
import {ClearPage} from "../pages/clear/clear";
import {GeneralPage} from "../pages/general/general";
import {HomePage} from "../pages/home/home";
import {JamPage} from "../pages/jam/jam";
import {TwitterService} from "../providers/twitter-service";
import {JsonpModule} from "@angular/http";

@NgModule({
    declarations: [
        MyApp,
        AccidentsPage,
        ClearPage,
        GeneralPage,
        HomePage,
        JamPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        JsonpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AccidentsPage,
        ClearPage,
        GeneralPage,
        HomePage,
        JamPage
    ],
    providers: [TwitterService]
})
export class AppModule {
}

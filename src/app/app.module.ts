import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccidentsPage } from "../pages/accidents/accidents";
import { ClearPage } from "../pages/clear/clear";
import { GeneralPage } from "../pages/general/general";
import { HomePage } from "../pages/home/home";
import { JamPage } from "../pages/jam/jam";
import { TwitterService } from "../providers/twitter-service";
import { JsonpModule } from "@angular/http";
import { HelpPage } from "../pages/help/help";
import { RecklessPage } from "../pages/reckless/reckless";
import { ModalContentHomePage } from "../pages/home/home";
import { ModalContentAccidentPage } from "../pages/accidents/accidents";
import { ModalContentGeneralPage } from "../pages/general/general";
import { ModalContentClearPage } from "../pages/clear/clear";



@NgModule({
    declarations: [
        MyApp,
        AccidentsPage,
        ClearPage,
        GeneralPage,
        HomePage,
        JamPage,
        HelpPage,
        RecklessPage,
        ModalContentHomePage,
        ModalContentAccidentPage,
        ModalContentGeneralPage,
        ModalContentClearPage,
        ModalContentJamPage

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
        JamPage,
        HelpPage,
        RecklessPage,
        ModalContentHomePage,
        ModalContentAccidentPage,
        ModalContentGeneralPage,
        ModalContentClearPage,
        ModalContentJamPage
    ],
    providers: [TwitterService]
})
export class AppModule {
}

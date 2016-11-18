import {Injectable} from '@angular/core';
import {RequestOptions, URLSearchParams, Headers, Response, Http} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/filter';

@Injectable()
export class TwitterService {

    baseUrl: string = 'http://localhost:8000/api/Ma3Route';


    constructor(public http: Http) {

    }

    getAccidents(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
            .map(tweets => {
                return tweets.filter(tweet => (tweet.text.toLowerCase().indexOf("accident") >= 0) ||
                (tweet.text.toLowerCase().indexOf("collision") >= 0) ||
                (tweet.text.toLowerCase().indexOf("accidents") >= 0));
            })
            .catch(this.handleErrors);
    }


    getClear(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
            .map(tweets => {
                return tweets.filter(tweet => (tweet.text.toLowerCase().indexOf("clear") >= 0) ||
                (tweet.text.toLowerCase().indexOf("smooth") >= 0) ||
                (tweet.text.toLowerCase().indexOf("no traffic") >= 0) );
            })
            .catch(this.handleErrors);
    }

    getGeneral(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    getJam(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
            .map(tweets => {
                return tweets.filter(tweet => (tweet.text.toLowerCase().indexOf("jam") >= 0) ||
                (tweet.text.toLowerCase().indexOf("slow") >= 0) ||
                (tweet.text.toLowerCase().indexOf("heavy traffic") >= 0))
            })
            .catch(this.handleErrors);
    }

    private filter(param){

    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrors(error: any) {
        let errMsg = error.json();
        return Observable.throw(errMsg);
    }

}

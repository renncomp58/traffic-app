import {Injectable} from '@angular/core';
import {RequestOptions, URLSearchParams, Headers, Response, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class TwitterService {

    baseUrl: string = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    constructor(public jsonp: Jsonp) {

    }

    getAccidents(): Observable<{}> {
        return this.jsonp.get(`${this.baseUrl}`, this.getOptions())
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    getClear(): Observable<{}> {
        return this.jsonp.get(`${this.baseUrl}`)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    getGeneral(): Observable<{}> {
        return this.jsonp.get(`${this.baseUrl}`)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    getJam(): Observable<{}> {
        return this.jsonp.get(`${this.baseUrl}`)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrors(error: any) {
        let errMsg = error.json();
        return Observable.throw(errMsg);
    }

    private getOptions(): RequestOptions {

        var headers = new Headers({
            'Authorization': 'OAuth oauth_consumer_key="CHvjcYGvY35sepLC2YOk3Cvzc", oauth_token="277494893-ZDg4l4t5DPzOfC2qbV4gmPmPL0WDswNF3P0i3xad", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1478277707", oauth_nonce="kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg", oauth_version="1.0", oauth_signature="Fj7LfveCWCgjPv79izqsoaiEPe0%3D" '
        });
        var params: URLSearchParams = new URLSearchParams();
        params.set('screen_name', 'Ma3Route');
        return new RequestOptions({search: params, headers: headers});
    }
}

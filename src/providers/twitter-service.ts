import {Injectable} from '@angular/core';
import {RequestOptions, URLSearchParams, Headers, Response, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class TwitterService {

    baseUrl: string = 'http://localhost:8000/api/Ma3Route';


    constructor(public http: Http) {

    }

    getAccidents(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
            .catch(this.handleErrors);
    }


    getClear(): Observable<{}> {
        return this.http.get(`${this.baseUrl}`)
            .map(this.extractData)
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

}

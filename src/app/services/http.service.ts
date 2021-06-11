/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class HttpService {

    appConfig = {
        apiUrl      : '',
        headers     : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Accept'			: 'application/json',
            'X-Requested-With' 	: 'XMLHttpRequest',
            'Access-Control-Allow-Origin'	: '*',
            'Access-Control-Allow-Methods'	: 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'	: '*',
        }),
    };


    constructor( private http: HttpClient ) {}


    getData(verb: any ): Observable<any> {
        return this.http.get( this.appConfig.apiUrl + verb , {headers : this.appConfig.headers});
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}


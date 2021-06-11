/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from "@angular/core";
import { LoaderService } from "../services/loader.service";
import { Observable, throwError, from, Observer} from "rxjs";
import { map, catchError, switchMap, finalize } from "rxjs/operators";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {

    private requests: HttpRequest<any>[] = [];

    constructor(private loaderService: LoaderService) {}


    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requests.push(request);
        this.loaderService.isLoading.next(true);

        return Observable.create((observer) => {
            const subscription = next.handle(request)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(request);
                            observer.next(event);
                        }
                    },
                    err => {
                        alert('error' + err);
                        this.removeRequest(request);
                        observer.error(err);
                    },
                    () => {
                        this.removeRequest(request);
                        observer.complete();
                    }
                );
            return () => {
                this.removeRequest(request);
                subscription.unsubscribe();
            };
        })

    }

}
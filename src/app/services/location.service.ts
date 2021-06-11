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


const GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    constructor() {
      this.getPosition();
    }

    getPosition(): Observable<any> {
        return Observable.create(observer => {
            if ( navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        observer.next(position);
                        observer.complete();
                    },
                    (error) => {
                        switch (error.code) {
                            case 1:
                                observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                                break;
                            case 2:
                                observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                                break;
                            case 3:
                                observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                                break;
                        }
                    },
                    this.options
                );
            } else {
                observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
            }
        });
    }

}

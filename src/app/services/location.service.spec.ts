/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { TestBed } from "@angular/core/testing";
import { LocationService } from "./location.service";


describe('LocationService', () => {
    let service: LocationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});

/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { TestBed } from "@angular/core/testing";
import { LoaderService } from "./loader.service";

describe('LoaderService', () => {
    let service: LoaderService;


    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoaderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});

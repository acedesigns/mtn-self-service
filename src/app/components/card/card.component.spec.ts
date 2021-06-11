/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { CardComponent } from "./card.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

describe('CardComponent', () => {

    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CardComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

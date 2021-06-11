/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit, ViewEncapsulation, AfterContentInit } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit, AfterContentInit {

    items: any;


    constructor() { }


    ngOnInit(): void {}


    ngAfterContentInit() {
        this.items = [
            { title: 'Mobile Internet', image: './images/small-card.png' },
            { title: 'Home Internet', image: './images/small-card.png' },
            { title: 'Get a device', image: './images/small-card.png' },
            { title: 'Add a Phone-line', image: './images/small-card.png' },
            { title: 'Upgrade', image: './images/small-card.png' },
        ];
    }

}

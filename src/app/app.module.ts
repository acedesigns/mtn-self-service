/* =======================================================
 *
 * Created by anele on 10/06/2021.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CarouselModule } from "@jasonvh/carousel";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./components/card/card.component";
import { ComponentsModule } from "./components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS, } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpRequestInterceptor } from "./interceptors/http-loading.interceptor";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent
    ],

    imports: [
        FormsModule,
        BrowserModule,
        CarouselModule,
        ComponentsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }

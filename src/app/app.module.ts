import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { OverlayModule } from '@angular/cdk/overlay';// tạo thành phần lớp phủ// thường được sử dụng để tạo các dropdowns, popup, tooltips, context menus
// import { CdkMenuModule } from '@angular/cdk/menu';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        OverlayModule,
        HttpClientModule

        // CdkMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

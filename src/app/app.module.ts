import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([{
            path: '*',
            component: MainLayoutComponent
        }, {
            path: '',
            component: MainLayoutComponent
        }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

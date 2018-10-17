import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {fakeBackendProvider} from './core/fake-backend/fake-backend.interceptor';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {LogService} from './core/log.service';
import {LogStation} from './classes/observer/log-station';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    HttpClientModule,

    DashboardModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    LogService,
    LogStation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

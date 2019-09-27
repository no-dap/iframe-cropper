import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IframeComponent } from './iframe/iframe.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'iframe',
    component: IframeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

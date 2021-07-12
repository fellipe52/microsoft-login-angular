import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular'
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component'

export function MSAL_InstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '617855ec-0d9e-4802-8947-5cc327f14b1d',
      redirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSAL_InstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

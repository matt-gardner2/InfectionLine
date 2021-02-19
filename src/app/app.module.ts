import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './services/config.service';
import { DataService } from './services/data.service';
import { MockService } from './services/mock.service';
import { AuthenticationService } from './services/authentication.service';
import { CashmereModule } from './cashmere/cashmere.module';
import { NavComponent } from './nav/nav.component';
import { InfectionLineFormComponent } from './infection-line-form/infection-line-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function configInit(configService:ConfigService){
  return () => configService.load();
}
export function authInit(authService:AuthenticationService){
  return () => authService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfectionLineFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CashmereModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configInit,
      multi:true,
      deps: [ConfigService]
    },
    AuthenticationService,
    {
      provide:APP_INITIALIZER,
      useFactory: authInit,
      multi:true,
      deps: [AuthenticationService]
    },
    DataService,
    MockService
  ],
  bootstrap: [AppComponent],
  exports:[
    CashmereModule
  ],
})
export class AppModule { }

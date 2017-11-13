import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScheduleDataService } from './schedule-data.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundComponent } from './background/background.component';
import {SessionService} from './session.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AgendaComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ScheduleDataService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

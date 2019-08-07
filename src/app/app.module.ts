import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AlertModule, PaginationModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ProjectComponent } from './main/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionComponent } from './main/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { GitHubComponent } from './main/git-hub/git-hub.component';
import { HttpService } from './http.service';
import { ErrorComponent } from './main/git-hub/error/error.component';
import { UserComponent } from './main/git-hub/user/user.component';
//import { TimeDateComponent } from './main/accordion/time-date/time-date.component';
import { TimeComponent } from './main/accordion/time/time.component';
import { DateComponent } from './main/accordion/date/date.component';

const appRoutes: Routes = [
  { path:'', component: AccordionComponent },
  { path:'project', component: ProjectComponent },
  { path:'gitHubUsers', component: GitHubComponent }
  // { path: 'time', component: TimeComponent, outlet: 'timeDate' },
  // { path: 'date', component: DateComponent, outlet: 'timeDate' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    ProjectComponent,
    AccordionComponent,
    GitHubComponent,
    ErrorComponent,
    UserComponent,
    //TimeDateComponent,
    TimeComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled'
    }),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

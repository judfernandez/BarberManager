// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgxEchartsModule } from 'ngx-echarts';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';
import { BarberComponent } from './barber/barber.component';
import { SaloonsComponent } from './saloons/saloons.component';
import { TatooComponent } from './tatoo/tatoo.component';
import { SpaComponent } from './spa/spa.component';

// Others
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LinePlotComponent } from './dashboard/dashboard-plots/line-plot/line-plot.component';
import { PiePlotComponent } from './dashboard/dashboard-plots/pie-plot/pie-plot.component';
import { PercentPlotComponent } from './dashboard/dashboard-plots/percent-plot/percent-plot.component';
import { PiePlotTwoComponent } from './dashboard/dashboard-plots/pie-plot-two/pie-plot-two.component';
import { LinePlotTwoComponent } from './dashboard/dashboard-plots/line-plot-two/line-plot-two.component';
import { LinePlotThreeComponent } from './dashboard/dashboard-plots/line-plot-three/line-plot-three.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    CalendarComponent,
    DashboardComponent,
    RecommendedComponent,
    RequestComponent,
    ProfileComponent,
    BarberComponent,
    SaloonsComponent,
    TatooComponent,
    SpaComponent,
    LinePlotComponent,
    PiePlotComponent,
    PercentPlotComponent,
    PiePlotTwoComponent,
    LinePlotTwoComponent,
    LinePlotThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

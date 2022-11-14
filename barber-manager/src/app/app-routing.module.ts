
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedComponent } from './recommended/recommended.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'request', component: RequestComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetsComponent } from './assets/assets.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LedgerComponent } from './ledger/ledger.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'ledger',
    component: LedgerComponent
  },
  {
    path: 'announcements',
    component: AnnouncementComponent
  },
  {
    path: 'assets',
    component: AssetsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

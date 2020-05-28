import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { AssetsComponent } from './assets/assets.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { StaffComponent } from './staff/staff.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AssetsComponent,
    AnnouncementComponent,
    UsersComponent,
    SettingsComponent,
    LedgerComponent,
    SidenavComponent,
    StaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({}),
    MatCardModule,
    MatRippleModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

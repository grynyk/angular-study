import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { Http, HttpModule } from '@angular/http';
import { TableComponent } from './components/table/table.component';
import { CdkDetailRowDirective } from './components/table/cdk-detail-row.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    CdkDetailRowDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

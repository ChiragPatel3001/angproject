import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskAComponent } from './task-a/task-a.component';
import { TaskbasicComponent } from './taskbasic/taskbasic.component';
import { TasktablesComponent } from './tasktables/tasktables.component';
import { TaskformsComponent } from './taskforms/taskforms.component';
import { TaskvideosComponent } from './taskvideos/taskvideos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskAComponent,
    TaskbasicComponent,
    TasktablesComponent,
    TaskformsComponent,
    TaskvideosComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

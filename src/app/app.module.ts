import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { WebFormComponent } from './webform/webform.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WebFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

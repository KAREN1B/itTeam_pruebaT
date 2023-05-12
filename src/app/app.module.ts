import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared-module.module';
import { ListImagesComponent } from './listImages/listImages.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FilterImagesComponent } from './filterImages/filterImages.component';

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    FilterImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
/*     BrowserAnimationsModule,
    FormsModule,
    SearchImagesModule,
    RouterModule,
    ReactiveFormsModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

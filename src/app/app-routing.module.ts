import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchImagesComponent } from './searchImages/searchImages.component';

const routes: Routes = [
  {
    path: "SearchImages",
    component: SearchImagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

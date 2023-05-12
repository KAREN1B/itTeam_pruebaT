import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchImagesComponent } from './searchImages/searchImages.component';
import { FilterImagesComponent } from './filterImages/filterImages.component';

const routes: Routes = [
  {
    path: "SearchImages",
    component: SearchImagesComponent
  },
  {
    path: " ",
    component: SearchImagesComponent
  },
  {
    path: "FilterImages",
    component: FilterImagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

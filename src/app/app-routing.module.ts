import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImagesComponent } from './listImages/listImages.component';
import { FilterImagesComponent } from './filterImages/filterImages.component';

const routes: Routes = [
  {
    path: "ListImages",
    component: ListImagesComponent
  },
  {
    path: " ",
    component: ListImagesComponent
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

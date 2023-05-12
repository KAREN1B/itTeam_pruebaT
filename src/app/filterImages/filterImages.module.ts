import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterImagesComponent } from './filterImages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FilterImagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FilterImagesModule { }

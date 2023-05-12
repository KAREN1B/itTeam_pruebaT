import { Component, OnInit } from '@angular/core';
import { InfoImageService } from '../services/infoImage.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  templateUrl: './filterImages.component.html',
  styleUrls: ['./filterImages.component.scss']
})
export class FilterImagesComponent implements OnInit {

  public myForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {

  }

  public initialForm(): void {
    this.myForm = this.formBuilder.group({
      name: new FormControl(),
    });
  }
}

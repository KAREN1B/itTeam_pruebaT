import { Component, OnInit } from '@angular/core';
import { InfoImageService } from '../services/infoImage.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  templateUrl: './searchImages.component.html',
  styleUrls: ['./searchImages.component.scss']
})
export class SearchImagesComponent implements OnInit {
  data: any = [];

  public filterImages: boolean = false;
  public listImages: boolean = false;
/*   public myForm: FormGroup; */


  constructor(
    private  infoImageService:InfoImageService,
  ) { }

  ngOnInit(): void {
    this.getInfoimageList();
    /* this.iniciliteForm */
  }

  public getInfoimageList( ) {
    this.infoImageService.getinfoImage().subscribe( data => {
      data.hits.map((hit: any) => {
        this.data= hit;
        console.log(hit)
      })
    } )

  }

  public showListImages(): void {
    this.listImages = !this.listImages
  }

  public showFilterImages(): void {
    this.filterImages = !this.filterImages
  }

/*   private iniciliteForm(): void {
    this.myForm = this.fb.group({
      name: new FormControl(),
      categoria: new FormControl(0),
    });
  }

  private filterImage(name: string, categoria: string): void {
    this.infoImageService.getImageFilter(name,categoria).subscribe(
      (result) => {
        this.myForm.controls.name.setValue(name,categoria);
      }, (error) => {


      }); */
  }





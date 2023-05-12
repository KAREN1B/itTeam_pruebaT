import { Component, OnInit } from '@angular/core';
import { InfoImageService } from '../services/infoImage.service';
import { FormBuilder } from '@angular/forms';


@Component({
  templateUrl: './searchImages.component.html',
  styleUrls: ['./searchImages.component.scss']
})
export class SearchImagesComponent implements OnInit {
  data: any = [];

  public filterImages: boolean = false;
  public listImages: boolean = false;
/*   public myForm: FormGroup | any; */


  constructor(
    private  infoImageService:InfoImageService,
   /*  private fb: FormBuilder, */
  ) { }

  ngOnInit(): void {
    this.getInfoimageList();
  /*   this.initialForm(); */
  }

/*   public initialForm(): void {
    this.myForm = this.fb.group({
      name: new FormControl(''),
    });
  } */

/*   public getInfoimageList( ) {
    this.infoImageService.getinfoImage().subscribe( data => {
      data.hits.map((hit: any) => {
        this.data= hit;
        console.log(hit)
      })
    } )

  } */

 public getInfoimageList( ) {
  /* this.data.hits, */
    this.infoImageService.getinfoImage().subscribe( data => {
      this.data = data.hits;
      console.log('console.log',this.data)
    } )

  }


 /*  public filterImagesName(code: string): void {
    this.infoImageService.getImageFilter(code).subscribe((result) => {
      console.log(result)
        this.myForm.controls.name.setValue(code);
      }, (error) => {
        error({ type: 'Error', msg: error?.error?.message, title: error?.error?.name });

      });
  } */
}

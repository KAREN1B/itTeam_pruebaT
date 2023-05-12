
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class InfoImageService {
  constructor(private http: HttpClient) {}
  private urlApiImages = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';
  private urlApiImagesName = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es&q';

  public getinfoImage(): Observable<any>{
    return this.http.get<any>(this.urlApiImages);
  }

  public getImageFilter(code: string): Observable<any> {
    return this.http.get<any>(this.urlApiImagesName, { params: { code } }
    );
  }



}


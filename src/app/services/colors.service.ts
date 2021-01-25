import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/environments/endpoints';
import { ColorResponse } from '../model/colormodel';
@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }
  getColor(): Observable<ColorResponse> {
    return this.http.get<ColorResponse>(Endpoints.colors);
  }
}

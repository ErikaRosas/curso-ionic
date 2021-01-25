import { Component } from '@angular/core';
import { Color } from '../model/colormodel';
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colors: Color[];

  constructor(private colorService: ColorsService) {
    this.colorService.getColor().subscribe(res => {
      this.colors = res.data;
    });
  }



}

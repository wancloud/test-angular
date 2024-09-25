import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDemoComponent } from "./angular-demo/angular-demo.component";
import { CategoryComponent } from "./category/category.component";
import { TitleComponent } from "./title/title.component";
import myData from "./personal-info.json"
import { DescriptionComponent } from "./description/description.component";
import { DescModel } from './desc-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularDemoComponent, CategoryComponent, TitleComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  aboutMe: string = myData.about
  descExp: DescModel[] = [];
  descEdu: DescModel[] = [];

  constructor() {
    this.aboutMe = myData.about;
    this.descEdu = myData.edu;
    this.descExp = myData.exp;
  }
}

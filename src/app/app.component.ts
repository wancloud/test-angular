import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDemoComponent } from "./angular-demo/angular-demo.component";
import { CategoryComponent } from "./category/category.component";
import { TitleComponent } from "./title/title.component";
import myData from "./personal-info.json"
import { DescriptionComponent } from "./description/description.component";
import { DescModel } from '../model/desc-model';
import { SkillModel } from '../model/skill-model';
import { SkillComponent } from "./skill/skill.component";
import { HobbyComponent } from "./hobby/hobby.component";
import { ContactComponent } from "./contact/contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, AngularDemoComponent, CategoryComponent, TitleComponent, DescriptionComponent, SkillComponent, HobbyComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  aboutMe: string = myData.about
  descExp: DescModel[] = [];
  descEdu: DescModel[] = [];
  skills: SkillModel[] = [];
  displayDemo: boolean = false;

  constructor() {
    this.aboutMe = myData.about;
    this.descEdu = myData.edu;
    this.descExp = myData.exp;
    this.skills = myData.skills;
  }

  onClick(event: MouseEvent) {
    this.displayDemo = !this.displayDemo;
  }
}

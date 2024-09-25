import { Component, Input } from '@angular/core';
import { IconImg } from '../icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() icon: string = ""
  @Input() name: string = ""
  iconImg: SafeHtml | undefined

  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngAfterViewInit() {
    if(this.icon == "info") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.PersonalInfo("darkcyan", 40))
    }
    if(this.icon == "cap") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.GraduationCap("darkcyan", 40))
    }
    if(this.icon == "briefcase") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.Briefcase("darkcyan", 40))
    }
    if(this.icon == "phone") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.Phone("darkcyan", 40))
    }
    if(this.icon == "skills") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.Skills("darkcyan", 40))
    }
    if(this.icon == "camera") {
      this.iconImg = this.sanitizer.bypassSecurityTrustHtml(IconImg.Camera("darkcyan", 40))
    }
  }
}

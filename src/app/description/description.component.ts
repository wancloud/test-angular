import { Component, Input } from '@angular/core';
import { DescModel } from '../../model/desc-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() desModel: DescModel[] = [];
}

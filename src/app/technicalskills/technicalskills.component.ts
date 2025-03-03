import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technicalskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technicalskills.component.html',
  styleUrl: './technicalskills.component.css'
})
export class TechnicalskillsComponent {
           constructor(public data:DataService){}

}

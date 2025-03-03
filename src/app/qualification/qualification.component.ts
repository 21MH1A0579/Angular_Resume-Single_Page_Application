import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
    constructor(public data:DataService){}
    
} 

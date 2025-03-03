import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cerificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cerificates.component.html',
  styleUrl: './cerificates.component.css'
})
export class CerificatesComponent {
    constructor(public data:DataService){}
}

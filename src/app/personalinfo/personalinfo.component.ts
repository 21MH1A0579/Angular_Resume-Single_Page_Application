import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personalinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.css'
})
export class PersonalinfoComponent {
  
   constructor(public data:DataService)
   {
   }
   personalinfo:any=this.data.personalinformation;
   
}

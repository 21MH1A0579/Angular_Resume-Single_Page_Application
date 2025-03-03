import { Routes } from '@angular/router';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { QualificationComponent } from './qualification/qualification.component';
import { TechnicalskillsComponent } from './technicalskills/technicalskills.component';
import { CerificatesComponent } from './cerificates/cerificates.component';
import { Component } from '@angular/core';
export const routes: Routes = [
    {
        path:"person",
        component:PersonalinfoComponent
    },
    {
        path:"qualif",
        component:QualificationComponent
    },
    {
        path:"skills",
        component:TechnicalskillsComponent
    },
    {
        path:"cert",
        component:CerificatesComponent
    }
];

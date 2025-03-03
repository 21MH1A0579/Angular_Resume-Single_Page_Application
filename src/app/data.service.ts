import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  personalinformation:any=[
    {id:"name",value:"CHALUMURI BRAHMENDRA"},
    {id:"fathername",value:"VENKATARAO"},
   { id:"mothername",value:"MALLESWARI"},
   { id:"dob",value:"11-06-2004"},
   { id:"maritalstatus",value:"UNMARRIED"},
    {id:"phone",value:"9573282201"},
   { id:"email",value:"chalumuribrahmendra@gmail.com"},
   { id:"address",value:"venne village jami mandal vizianagaram district Andhra Pradesh"}
  ];
   educationinfo:any[]=[
    {
      qualification:"SSC",
      college:"SRI SURYA VIDHYALAYAM",
      board:"Board of Secondary Education",
      yearofpassing:"2019",
      percentage:"97"
    },
    {
      qualification:"INTER",
      college:"PUNYAGIRI JUNIOR COLLEGE",
      board:"Board of Intermediate Education",
      yearofpassing:"2021",
      percentage:"92"
    },
    {
      qualification:"BTECH",
      college:"SRI SURYA VIDHYALAYAM",
      board:"JNTUK",
      yearofpassing:"pursuing",
      percentage:"69"
    }
   ]
   skills:any={
   languages:["C","CPP","JAVA","PYTHON","DART","JS"],
   technologies:["flutter","MEANSTACK"]
   };
   certificates:any[]=[
    {
      src:"./assets/cimg.png",
      name:"CLA: Programming Essentials in C"
    },
    {
      src:"./assets/pythonimg.jpeg",
      name:"Python For IT Specialist Certification"
    },
    {
      src:"./assets/redhatimg.png",
      name:"Red Hat® Certified System Administrator (RHCSA®)"
    }
   ]
}


import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [NgFor,NgStyle],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
cityname :string[] =["lahore","karachi","faslabd","Rawalpindi","qasur"]
empdata :any[]=
[
  {empid:1 , name:'saqib',city:'lahore'},
  {empid:2 , name:'ali' ,city:'patoki'},
  {empid:3 , name:'awais',city:'RY Khan'},
  {empid:4 , name:'uzair', city:'okara'},
  
]
}

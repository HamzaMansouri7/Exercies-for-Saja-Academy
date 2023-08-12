import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-secondry',
  templateUrl: './secondry.component.html',
  styleUrls: ['./secondry.component.scss']
})
export class SecondryComponent implements OnInit {
  constructor(private educationservice: EducationService) {
   
    
  }


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}








}


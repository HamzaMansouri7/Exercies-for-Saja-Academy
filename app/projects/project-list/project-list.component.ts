import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{
  constructor(private projectService:ProjectService){}
  userList : any ; 
  ngOnInit() {
    this.userList = this.projectService.getUsersFromDb();
  }
}

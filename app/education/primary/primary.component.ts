import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {

  tasks: any; // array of tasks 
  newTask : string = ''; // the new emmited ( inputed )  task 

  constructor(private educationService: EducationService){}


  ngOnInit(): void {

  }

  addNewItem(){
    const newObject = {
      id: 11,
      description: this.newTask,
      status: 'In progress',
    }
    console.log('newObject', newObject);

    this.tasks.push(newObject);
    console.log(' this.tasks after we add ', this.tasks);
  }



  getTasks(){
    this.tasks=this.educationService.getTasksFromDataBase();
   console.log(" this.tasks",this.tasks)
  }


  deleteItem(taskId:any){
    const pos = this.tasks.findIndex((num:any) => num.id === taskId);
    this.tasks.splice(pos,1);
  }

}

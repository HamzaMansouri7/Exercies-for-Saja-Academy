import { Component, OnInit } from '@angular/core';
import { SkilsService } from '../skils.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {

  tasks: any;
  newTask :string = ''
  constructor(private skillsService: SkilsService){}


  ngOnInit(): void {
    this.tasks = this.skillsService.getTasksFromDataBase();
  }




  // addTask() {
  //   if (this.newTask !== '') {
  //     const newId = this.tasks.length + 1;
  //     this.tasks.push({ id: newId, name: this.newTask, status: 'In progress' });
  //     this.newTask = '';
  //   }
  //   console.log('this.tasks',this.tasks);
  // }

  // getTasks() {
  // // we wiil use it when we get data from backend 
  //   return this.tasks;
  // }

  // deleteTask(taskId: number) {
  //   this.tasks = this.tasks.filter(task => task.id !== taskId);
  // }

  // markAsFinished(taskId: number) {
  //   const task = this.tasks.find(task => task.id === taskId);
  //   if (task) {
  //     task.status = 'Finished';
  //   }
  // }
}

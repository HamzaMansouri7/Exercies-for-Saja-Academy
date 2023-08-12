import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SkilsService {

  constructor() { }



  getTasksFromDataBase() {
    const tasks = [
      {
        id: 1,
        description: 'Buy groceries for next week',
        status: 'In progress',
      },
      {
        id: 2,
        description: 'Prepare presentation for the meeting',
        status: 'In progress',
      },
      {
        id: 3,
        description: 'Pay utility bills',
        status: 'In progress',
      },
      {
        id: 4,
        description: 'Complete coding assignment',
        status: 'In progress',
      },
      {
        id: 5,
        description: 'Schedule a doctor appointment',
        status: 'In progress',
      },
      {
        id: 6,
        description: 'Read a book on Angular',
        status: 'In progress',
      },
      {
        id: 7,
        description: 'Call a friend',
        status: 'In progress',
      },
      {
        id: 8,
        description: 'Clean the house',
        status: 'In progress',
      },
      {
        id: 9,
        description: 'Exercise for 30 minutes',
        status: 'In progress',
      },
      {
        id: 10,
        description: 'Learn a new recipe',
        status: 'In progress',
      },
    ];
     
    return tasks;
  }


  getSkils(){
    
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  getUsersFromDb(){
    // appele de base de donné
    const userListFromDb = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        age: 25,
        imageUrl: 'https://example.com/john.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 30,
        imageUrl: 'https://example.com/jane.jpg',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Michael Johnson',
        email: 'michael@example.com',
        age: 28,
        imageUrl: 'https://example.com/michael.jpg',
        details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        name: 'Emily Williams',
        email: 'emily@example.com',
        age: 22,
        imageUrl: 'https://example.com/emily.jpg',
        details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        name: 'Daniel Brown',
        email: 'daniel@example.com',
        age: 32,
        imageUrl: 'https://example.com/daniel.jpg',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Olivia Davis',
        email: 'olivia@example.com',
        age: 29,
        imageUrl: 'https://example.com/olivia.jpg',
        details: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        name: 'William Johnson',
        email: 'william@example.com',
        age: 26,
        imageUrl: 'https://example.com/william.jpg',
        details: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
      {
        name: 'Ava Smith',
        email: 'ava@example.com',
        age: 31,
        imageUrl: 'https://example.com/ava.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'James Wilson',
        email: 'james@example.com',
        age: 27,
        imageUrl: 'https://example.com/james.jpg',
        details: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      },
      {
        name: 'Sophia Taylor',
        email: 'sophia@example.com',
        age: 23,
        imageUrl: 'https://example.com/sophia.jpg',
        details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        name: 'Oliver Martinez',
        email: 'oliver@example.com',
        age: 28,
        imageUrl: 'https://example.com/oliver.jpg',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Isabella Lewis',
        email: 'isabella@example.com',
        age: 24,
        imageUrl: 'https://example.com/isabella.jpg',
        details: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        name: 'Noah Johnson',
        email: 'noah@example.com',
        age: 29,
        imageUrl: 'https://example.com/noah.jpg',
        details: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
      {
        name: 'Mia Anderson',
        email: 'mia@example.com',
        age: 33,
        imageUrl: 'https://example.com/mia.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Ethan Brown',
        email: 'ethan@example.com',
        age: 25,
        imageUrl: 'https://example.com/ethan.jpg',
        details: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      },
      {
        name: 'Amelia Martin',
        email: 'amelia@example.com',
        age: 27,
        imageUrl: 'https://example.com/amelia.jpg',
        details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        name: 'Liam Wilson',
        email: 'liam@example.com',
        age: 26,
        imageUrl: 'https://example.com/liam.jpg',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sophia Davis',
        email: 'sophia@example.com',
        age: 22,
        imageUrl: 'https://example.com/sophia2.jpg',
        details: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        name: 'Lucas Johnson',
        email: 'lucas@example.com',
        age: 32,
        imageUrl: 'https://example.com/lucas.jpg',
        details: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
      {
        name: 'Emma Anderson',
        email: 'emma@example.com',
        age: 28,
        imageUrl: 'https://example.com/emma.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Alexander Martinez',
        email: 'alexander@example.com',
        age: 29,
        imageUrl: 'https://example.com/alexander.jpg',
        details: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laborios'
    }
    ]
    return userListFromDb ;
  }

}

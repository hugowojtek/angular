import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jakis tytul';
  // message = {
  //   id: 1,
  //   content: 'wiadomosc'
  // };
  selectedMessage: Message;

  messages: Message[] = [

    {
      id: 1,
      content: 'widomosc',

    },
    {
      id: 2,
      content: 'widomosc w tablicy 1',
      author: 'ja'
    },
    {
      id: 3,
      content: 'widomosc w tablicy 2'
    }
  ];

  showMessage(message: Message): void {
    this.selectedMessage = message;
  }

  // messages = [
  //   {
  //     id: 2,
  //     content: 'widomosc w tablicy 1',
  //     author: 'ja'
  //   },
  //   {
  //     id: 3,
  //     content: 'widomosc w tablicy 2'
  //   }
  // ];
}

export interface Message {
  id: number;
  content: string;
  author?: string;
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';

  createNewContact() {
    console.log('Someone clicked me!!!')
  }

  contact: any;
  contacts: any[] = [];

  constructor() {
    this.initContact();
  }

  private initContact() {
    this.contact = {
      name: ``,
      email: ``,
      company: ``,
      role: ``,
      twitter: ``,
      location: ``,
      notes: ``
    }
  }
}

import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  focus;
  focus1;
  public message: string;


  constructor() { }

  ngOnInit(): void {

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('study_club', 'study_club_contact', e.target as HTMLFormElement, 'user_QyVIERmwsAfUqFrZoMeCQ')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
        this.message = 'Message was send'    
  }
}

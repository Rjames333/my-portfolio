import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topics = 
  ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5557775588, '', 'morning', true);
}

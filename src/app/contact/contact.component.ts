import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(  public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    // Implement your logout logic here, e.g., clear user session or perform necessary actions
    // For simplicity, let's assume you're just navigating to the login page
    this.router.navigate(['/']);
  }
}

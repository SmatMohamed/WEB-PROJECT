import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    // Implement your logout logic here, e.g., clear user session or perform necessary actions
    // For simplicity, let's assume you're just navigating to the login page
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    // Implement your logout logic here, e.g., clear user session or perform necessary actions
    // For simplicity, let's assume you're just navigating to the login page
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';

import { CartService } from "src/app/services/cart.service";
import { CourseService } from "src/app/services/course.service";

// import {courses} from "./../courses-list";
import { Course } from "./../course.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: any = [];

  // public cartContent: any[]= [];

  constructor(
    private cartService: CartService,
    private courseService: CourseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // this.cartContent = this.cartService.get();
    this.courseService.all().subscribe(
      res => this.coursesList = res
    );

  }
  logout() {
    // Implement your logout logic here, e.g., clear user session or perform necessary actions
    // For simplicity, let's assume you're just navigating to the login page
    this.router.navigate(['/']);
  }
  public addToCart(id: string):void {
    this.cartService.add(id);
  }

}

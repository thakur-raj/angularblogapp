import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  // declare a dummy blog variable
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "Monday, April 11, 3008 2:45:07 PM",
      "created": "Saturday, April 2, 1932 3:09:01 AM",
      "author": "Bethany",
      "category": "Comedy",
      "isPublished": true,
      "views": "0",
      "bodyHtml": "This is blog1 body",
      "description": "AGtZlPhhOONleivx0v2J",
      "title": "Titanic",
      "tags": []
    },
    {
      "blogId": "2",
      "lastModified": "Monday, January 3, 2631 7:27:18 AM",
      "created": "Wednesday, July 9, 1175 5:16:47 PM",
      "author": "Ember",
      "category": "Action",
      "isPublished": true,
      "views": "0",
      "bodyHtml": "This is blog2 body",
      "description": "qScTg84fhM1w0Z6RHvQa",
      "title": "Shutter Island",
      "tags": []
    },
    {
      "blogId": "3",
      "lastModified": "Monday, April 23, 4001 4:56:06 AM",
      "created": "Sunday, January 13, 4047 1:13:56 AM",
      "author": "Mason",
      "category": "Drama",
      "isPublished": true,
      "views": "0",
      "bodyHtml": "<h1>This is blog3 body</h1>",
      "description": "Zyy80PxsGMQ73PWZj0Rj",
      "title": "Friends With Kids",
      "tags": []
    },
    {
      "blogId": "4",
      "lastModified": "Friday, June 9, 2102 1:46:45 AM",
      "created": "Thursday, March 14, 4391 7:30:56 AM",
      "author": "Michael",
      "category": "Suspense",
      "isPublished": true,
      "views": "0",
      "bodyHtml": "This is blog4 body",
      "description": "hoRlaztCOXcVlvMEycMJ",
      "title": "Terminator I",
      "tags": []
    },
    {
      "blogId": "5",
      "lastModified": "Thursday, April 21, 2107 11:26:13 AM",
      "created": "Monday, April 17, 1234 3:36:17 AM",
      "author": "Luke",
      "category": "Thriller",
      "isPublished": true,
      "views": "0",
      "bodyHtml": "This is blog5 body",
      "description": "6bhgNJLruhs7bwIMskb5",
      "title": "The Martian",
      "tags": []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Home Component Destroyed....");

  }
}

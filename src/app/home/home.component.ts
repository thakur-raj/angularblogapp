import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public allBlogs;

  constructor(private _blogService: BlogService) {
    console.log("Home Component Constructor called....");
  }

  ngOnInit() {
    console.log("Home Component ngOnInit called....");
    this.allBlogs = this._blogService.getAllBlogs();
    console.log("All blogs grabbed in home component");


  }

  ngOnDestroy() {
    console.log("Home Component Destroyed....");

  }
}

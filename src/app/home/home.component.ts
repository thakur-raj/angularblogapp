import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public allBlogs;

  constructor(private _blogHttpService: BlogHttpService) {
    console.log("Home Component Constructor called....");
  }

  ngOnInit() {
    console.log("Home Component ngOnInit called....");

    let allBlogsObservable = this._blogHttpService.getAllBlogs();
    allBlogsObservable.subscribe(
      data => {
        // console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("Some Error Occurrerd");
        console.log(error.errorMessage);
      }
    )


  }

  ngOnDestroy() {
    console.log("Home Component Destroyed....");

  }
}

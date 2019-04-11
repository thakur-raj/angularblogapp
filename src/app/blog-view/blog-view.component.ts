import { Component, OnInit, OnDestroy } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {


  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, private _blogHttpService: BlogHttpService) {
    console.log('BlogviewComponent Constructor is called');
  }


  ngOnInit() {
    console.log('BlogviewComponent ngOnInit is called')
    //getting blog id from route
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this._blogHttpService.getSingleBlogInformation(myBlogId);
    this.currentBlog.subscribe(
      data => {
        // console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log('Some Error Occurrerd');
        console.log(error.errorMessage);
      }
    )
    // console.log(this.currentBlog);

  }


  ngOnDestroy() {
    console.log('BlogviewComponent ngOnDestroy is called')

  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {


  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, private _blogService: BlogService) {
    console.log('BlogviewComponent Constructor is called');
  }


  ngOnInit() {
    console.log('BlogviewComponent ngOnInit is called')
    //getting blog id from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this._blogService.getSingleBlogInformation(myBlogId);
    console.log("Current blogs grabbed in blogView component");

  }


  ngOnDestroy() {
    console.log('BlogviewComponent ngOnDestroy is called')

  }

}

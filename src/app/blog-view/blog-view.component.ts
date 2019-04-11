import { Component, OnInit, OnDestroy } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';

// for going back
import {Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {


  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, private _blogHttpService: BlogHttpService,private toastr: ToastrService,private location:Location) {
    console.log('BlogviewComponent Constructor is called');
  console.log(this.currentBlog);
  
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

  public deleteThisBlog(){
    const myBlogId = this._route.snapshot.paramMap.get('blogId');

    let blogDeleteObservable = this._blogHttpService.deleteBlog(this.currentBlog.blogId);
    blogDeleteObservable.subscribe(
      data => {
       console.log(data['message']);
       this.toastr.success('Blog Deleted Successfully !', 'Success', {
        timeOut: 1000,
        positionClass:'toast-top-full-width'
      });
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 1000);
       
      },
      error => {
        console.log('Some Error Occurrerd');
        console.log(error.errorMessage);
      }
    )
  }

  public goBackToPreviousPage(){
    this.location.back();
  }

}

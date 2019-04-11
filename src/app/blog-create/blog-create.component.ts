import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = [
    'Comedy', 'Drama', 'Action', 'Suspense', 'Thriller'
  ]



  constructor(private _blogHttpService: BlogHttpService, _route: ActivatedRoute, private _router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  public createBlog() {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    console.log(blogData);

    const createBlogObservable = this._blogHttpService.createBlog(blogData);
    createBlogObservable.subscribe(
      data => {
        console.log('Blog Created Successfully');
        console.log(data);
        this.toastr.success('Blog Posted Successfully !', 'Success', {
          timeOut: 1500,
          positionClass:'toast-top-full-width'
        });
        setTimeout(() => {
          this._router.navigate(['/blog', data.data.blogId])
        }, 1000);

      },
      error => {
        console.log('Some error occurred');
        console.log(error.errorMessage);
      }
    );


  }

}

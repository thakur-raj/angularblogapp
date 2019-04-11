import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public possibleCategories = [
    'Comedy', 'Drama', 'Action', 'Suspense', 'Thriller'
  ]
  public currentBlog;



  constructor(private _route: ActivatedRoute, private router: Router, private _blogHttpService: BlogHttpService, private toastr: ToastrService) { }

  ngOnInit() {
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log("ID '" + myBlogId + "' in edit mode.");

    this._blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {

        this.currentBlog = data["data"];
      },
      error => {
        console.log('Some Error Occurrerd');
        console.log(error.errorMessage);
      }
    )
    console.log("Current blog------>");

    console.log(this.currentBlog);


  }

  public editBlog() {

    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    this._blogHttpService.editBlog(myBlogId,this.currentBlog).subscribe(
      data => {

        this.toastr.success('Blog Edited Successfully !', 'Success', {
          timeOut: 1500,
          positionClass: 'toast-top-full-width'
        });

        setTimeout(()=>{
this.router.navigate(['/home']);
        },1000)

      },
      error => {
        console.log('Some Error Occurrerd');
        console.log(error.errorMessage);
      }
    )



  }
}

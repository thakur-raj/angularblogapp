import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'ZjVmOTZmODA5MDIzMTU1YzYyMWEwMTM1NTQxNTdhODdhYjYwOWE5OTVhNGM3ZGM4Y2U5MzU0NTJhN2Q5OTZlOTA4NzdhZjVkZGE2NGJkY2UxNTdmYmRlNTBiMTEzZDg5MjUxZDQ4M2QwNjA5ZTRlYjRjNTA2MjFmYjhmZDg1MDE1MQ==';


  constructor(private _http: HttpClient) {
    console.log("Blog-Http Service Constructor was called...");
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);

  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    // console.log(this.baseUrl + '/all' + "&authToken=" + this.authToken);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    // https://blogapp.edwisor.com/api/v1/blogs/view/:blogId
    let myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
    // console.log(this.baseUrl + '/view/'+currentBlogId+'?authToken=' + this.authToken);
    return myResponse;

  }

}

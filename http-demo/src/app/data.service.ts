import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createAndStorePosts(postData: any){
    this.http.post('https://ng-http-demo-31e1d-default-rtdb.firebaseio.com/posts.json', postData).subscribe(res => {
      console.log(res);
    });
  }

  fetchPosts(){
    // this.http.get('https://ng-http-demo-31e1d-default-rtdb.firebaseio.com/posts.json').subscribe(res => {
    //   console.log(res);
    // });
    return this.http.get<any[]>('https://ng-http-demo-31e1d-default-rtdb.firebaseio.com/posts.json').pipe(
      map(data => {
        const postArray = [];
        for(const key in data){
          postArray.push({...data[key], id: key});
        }
        return postArray;
      })
    );
  }

  deletePosts(){
    return this.http.delete('https://ng-http-demo-31e1d-default-rtdb.firebaseio.com/posts.json');
  }
}

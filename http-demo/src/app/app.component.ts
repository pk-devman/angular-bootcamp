import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];
  isFetching: boolean = false;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.dataService.createAndStorePosts(postData);  
  }

  onFetchPosts() {
    // Send Http request
    this.fetchData();
  }

  onClearPosts() {
    // Send Http request
    this.dataService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchData(){
    this.isFetching = true
    this.dataService.fetchPosts().subscribe(data => {
      this.loadedPosts = data;
      this.isFetching = false;
    }, error => {
      this.isFetching = false;
      console.log(error);
      this.error = error.error.error;

    });
  }
}

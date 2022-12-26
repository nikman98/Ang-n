import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchservService implements OnInit{
  // tosearch : String = localStorage.getItem("tosearch");
  // urlsrc: string = `https://newsapi.org/v2/everything?q=${this.tosearch}&apiKey=d8dd2e4534194ff491c310eccf33335d`;
 

  constructor(private http: HttpClient) { }
  
  ngOnInit() {

    this.initArticles();
    
  
  }
 
  initArticles() {
    let tosearch  = localStorage.getItem("tosearch");
    let urlsrc = `https://newsapi.org/v2/everything?q=${tosearch}&apiKey=d8dd2e4534194ff491c310eccf33335d`;
    return this.http.get(urlsrc);
  }
  
}
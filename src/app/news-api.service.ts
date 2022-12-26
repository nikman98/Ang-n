import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // url: string = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d8dd2e4534194ff491c310eccf33335d';
  url: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d8dd2e4534194ff491c310eccf33335d';
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

  constructor(private http: HttpClient) { }

 
  initArticles() {
    return this.http.get(this.url);
  }
  
}
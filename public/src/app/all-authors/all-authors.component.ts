import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  //variables
  authors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //run right after constructor
    this.getAuthorssFromService();
  }

  getAuthorssFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = data;
    });
  }

  onButtonDelete(id){
    let observable = this._httpService.deleteAuthorByID(id);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      this.getAuthorssFromService();
    });
  }
  
}

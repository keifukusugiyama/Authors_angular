import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    //run http get request to /api/authors (express routes.js and controller.js) and return to caller
    return this._http.get('/api/authors');
  }

  getAuthorByID(id: String){
    //run http get request to /api/authors/id with the passed in id parameter, goes to express routes.js and controller.js and return to caller
    return this._http.get(`/api/authors/${id}`);
  }

  addAuthor(newAuthor){
    return this._http.post('/api/authors', newAuthor);
  }

  updateAuthorByID(id: String, oneAuthor){
    return this._http.put(`/api/authors/${id}`, oneAuthor);
  }

  deleteAuthorByID(id: String){
    return this._http.delete(`/api/authors/${id}`);
  }

}

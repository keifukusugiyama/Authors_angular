import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  //variable
  oneAuthor = {};
  EditErrors : any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.showOneAuthor(params['id']);
    });
  }

  showOneAuthor(id: String) { 
    let observable = this._httpService.getAuthorByID(id);
    observable.subscribe(data => {
      if (data['message']) {
        console.log(data);
        this.EditErrors = {message: "ID is not found. Please try with correct ID or create a new one."};
      }
      else{
        this.oneAuthor = data;
      }
    });
  }

  onSubmitEdit(){
    let observable = this._httpService.updateAuthorByID(this.oneAuthor['_id'], this.oneAuthor);
    observable.subscribe(data => {
      if (data['errors']) {
        this.EditErrors = data;
      }
      else{
        this.goHome();
      }
    });
  }


  goHome() {
    this._router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  //variables
  newAuthor = { Name: ""};
  createNewErrors : any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  
  onSubmitNew() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      if (data['errors']) {
        this.createNewErrors = data;
      }
      else{
        this.newAuthor = { Name: "" };
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }
  
}

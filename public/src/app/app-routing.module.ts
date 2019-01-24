import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllAuthorsComponent },
  { path: 'new', component: NewAuthorComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

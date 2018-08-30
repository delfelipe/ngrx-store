import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Favorite } from './../models/favorite.model';
import * as FavoriteActions from './../actions/favorite.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addFavorite(name , url) {
    this.store.dispatch(new FavoriteActions.AddFavorite({
      name: name, 
      url: url
    }));
  }

  updateFavorite(name , url) {
    this.store.dispatch(new FavoriteActions.UpdateFavorite({
      name: name, 
      url: url
    }));
  }

}

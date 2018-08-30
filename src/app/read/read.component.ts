import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Favorite } from './../models/favorite.model';
import { AppState } from './../app.state';
import * as FavoritesActions from './../actions/favorite.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  favorites: Observable<Favorite[]>;

  constructor(private store: Store<AppState>) {
    this.favorites = store.select('favorite');
  }

  ngOnInit() {
  }

  deleteFavorite(index) {
    this.store.dispatch(new FavoritesActions.RemoveFavorite(index));
  }

}

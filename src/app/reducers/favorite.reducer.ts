import { Action } from '@ngrx/store';
import { Favorite } from './../models/favorite.model';
import * as FavoriteActions from './../actions/favorite.actions';

const initialState: Favorite = {
    name: 'Google',
    url: 'http://google.com'
}

export function reducer(state: Favorite[] = [initialState], action: FavoriteActions.Actions) {
    switch(action.type) {
        case FavoriteActions.ADD_FAVORITE:
            return [...state, action.payload];
        case FavoriteActions.REMOVE_FAVORITE:
            state.splice(action.payload, 1);
            return state;
        case FavoriteActions.UPDATE_FAVORITE:
            state.forEach((item) => {
                if(item.name === action.payload.name) {
                    state[state.indexOf(item)] = action.payload;
                }
            })
            return state;
        default:
            return state;
    }
}
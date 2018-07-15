import IGlobalStore from './interfaces/IGlobalStore';
import { combineReducers } from 'redux';

export const InitialState = combineReducers<IGlobalStore>({
    numbers: 0,
    name: ''
  });
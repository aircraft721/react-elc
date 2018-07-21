import {Reducer} from 'redux';

import {GlobalState} from '../app-state';
import {actionTypes} from '../actions/actionTypes';
import {GetUsers} from '../actions/action/GetUsers';

export const reducer:Reducer<GlobalState> = 
    (state: GlobalState = {users: []}, action: GetUsers )=>{
        switch(action.type){
            case actionTypes.GETUSERS: {
                return {
                    ...state,
                    clickAction: {
                        increment: 1,
                        decrement: 0
                    }
                }
            }
        }
    }
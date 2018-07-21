import { Action } from 'redux';

import { actionTypes } from '../actionTypes';
import {IUser} from '../../model/IUserModel';

declare var fetch: any;

export interface GetUserAction extends Action {
    users: IUser[];
}

const createGetUsersAction: () => GetUserAction =
    () => ({
        type: actionTypes.GETUSERS,
        users: []
    })

const createGotUsersAction: (users: IUser[]) => GetUserAction =
    (users: IUser[]) => ({
        type: actionTypes.GOTUSERS,
        users,
    })
export const GetUsers = () => {
    return (dispatch: any, getState: any) => {
        dispatch(createGetUsersAction());

        return fetch('http://localhost:3000/get')
            .then((res: any) => res.json())
            .then((users: IUser[]) => {
                
                const usersR:any = users.map((u)=>{
                    const user = new IUser();
                    user.name = user.name;
                    user.number = user.number;
                    return usersR;
                })
                dispatch(createGotUsersAction(usersR));
            })
    }
}
import { Action } from '@ngrx/store';
export class GenericAction{
    static ADD = 'GenericAction.ADD';
    static MULTIPLY = 'GenericAction.MULTIPLY';

    static add(payload): Action {
        return {
            type: GenericAction.ADD,
            payload: payload
        }
    }

    static multiply(payload): Action {
        return {
            type: GenericAction.MULTIPLY,
            payload: payload
        }
    }
    
}
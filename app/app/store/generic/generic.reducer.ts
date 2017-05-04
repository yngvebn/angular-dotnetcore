import { GenericAction } from './generic.action';
import { Action, ActionReducer } from '@ngrx/store';

export function genericReducer(state: any = 0, action: Action) {
    switch (action.type) {
        case GenericAction.ADD:
            return state + <number>action.payload;
        case GenericAction.MULTIPLY:
            return state * <number>action.payload;
        default:
            return state;
    }
}

export const GenericReducer: ActionReducer<any> = genericReducer;
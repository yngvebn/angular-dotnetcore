import { GenericReducer } from './generic/generic.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


const reducers = {
    generic: GenericReducer
}

@NgModule({
    imports: [
        StoreModule.provideStore(reducers, []),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5
        })
    ]
})
export class AppStoreModule {
    private static _stores = null;
    private static get stores() {
        if (!this._stores) {
            const obj = {};
            Object.keys(reducers).map(x => {
                obj[x] = x;
            });
            this._stores = obj;
        }
        return this._stores;
    }


    private static checkStoreName(store: string) {
        if (!store) {
            throw new ReferenceError('undefined store');
        }
        return store;
    }

    // use properties to retrieve the strings
    // and verify that we got the proper string
    // to eliminate errors caused by retrieving
    // the store elements using strings that
    // don't exist.  While it is still technically
    // possible to ask for a property that doesn't
    // exist, intellisense should reduce this.
    static get generic(): string {
        return AppStoreModule.checkStoreName(AppStoreModule.stores.generic);
    }
}
import { GenericAction } from './../store/generic/generic.action';
import { AppStoreModule } from './../store/store.module';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  genericState$: any;
  constructor(private store: Store<any>) {
    this.genericState$ = store.select(AppStoreModule.generic);
  }

  ngOnInit() {
  }

  triggerAction() {
    this.store.dispatch(GenericAction.add(20));
  }

  triggerMultiply(){
    this.store.dispatch(GenericAction.multiply(2));
  }

}

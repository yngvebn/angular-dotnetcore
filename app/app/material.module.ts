import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule } from '@angular/material';

const components = [MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule]

@NgModule({
    imports: [...components],
    exports: [...components]
})
export class MaterialModule {

}
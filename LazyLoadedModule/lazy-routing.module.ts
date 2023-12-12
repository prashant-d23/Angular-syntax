import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes : Routes = [{path : '', component: lazyComp}]; //define routing for lazy loaded module components that we create inside this module

@NgModule({
    imports:[RouterModule.forChild(routes)], //forChild method used for lazy loaded module
    exports : [RouterModule]
})

export class LazyLoadedModule{}
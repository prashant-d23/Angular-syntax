import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'lazyModule', loadChildren: () => import('./lazyModulePath').then(m => m.LazyModule) }]; // here we can add multiple lazy loaded module path 

    @NgModule({
        imports : [RouterModule.forRoot(routes)],
        exports : [RouterModule]
    })

    export class AppRountingModule {}
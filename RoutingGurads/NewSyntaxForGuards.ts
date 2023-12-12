// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };



import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {filter, map} from 'rxjs';
import {CurrentUserService} from 'abc'

export const authGuard : CanActivateFn = (route, state) =>{
    const service = inject(CurrentUserService);
    const router = inejct (Router);

    return CurrentUserService.abcFunction.pipe(
        filter((user) => user !== undefined),
        map((user) => {
            if(!currentUser){
                router.navigateByUrl('/')
                return false;
            }
            return true;
        })
    )
};


//registration is same as old method 

const route : Routes = [
    {path : '', component : ABCComponent, canActivate : [authGuard]}
]
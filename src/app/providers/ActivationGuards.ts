import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivationGuard implements CanActivate {

    private static USER_PARAM = "userId";
    
      constructor(private router: Router) {}
    
      public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         //const currentUser = this.userService.currentUser;
         //const paramUser = route.params[WorksheetAccessGuard.USER_PARAM];
        // if (paramUser && paramUser !== currentUser.id && !currentUser.admin) {
            if(localStorage.length==0){
             this.router.navigate(["login"]);
             return false;
         }
         return true;
      }
}

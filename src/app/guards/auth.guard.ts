import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (environment.security) {
      if (!this.authenticated) {
        await this.keycloak.login({
          redirectUri: window.location.origin + state.url,
        });
      }

      const requiredRoles = route.data?.['allowedRoles'];

      let granted = false;

      if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
        granted = true;
        return granted;
      }

      console.log(this.roles);

      granted = requiredRoles.every((role) => this.roles.includes(role));

      if (!granted) {
        await this.router.navigate(['permission-denied']);
      }

      return granted;
    } else {
      return true;
    }
  }
}

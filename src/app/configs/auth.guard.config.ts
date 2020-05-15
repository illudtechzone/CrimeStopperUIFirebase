import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
    issuer: 'https://dev.servers.divisosofttech.com/auth/realms/crimestopper',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email',
    dummyClientSecret: 'dac6d6fb-fbd7-453a-9cb3-73894f59489c',
    tokenEndpoint: 'https://dev.servers.divisosofttech.com/auth/realms/crimestopper/protocol/openid-connect/token',
    userinfoEndpoint: 'http://dev.servers.divisosofttech.com/auth/realms/crimestopper/protocol/openid-connect/userinfo',
    oidc: false,
    requireHttps: false
  };


@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        this.oauthService.setupAutomaticSilentRefresh();
    }
}

export interface IEnvironment {
  production: boolean;
  security: boolean;
  oauth2Config?: Keycloak.KeycloakConfig;
  serviceUrl: string;
  remoteUrl?: string;
  localUrl?: string;
}

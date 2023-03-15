import { IEnvironment } from './i-environment';

export const environment: IEnvironment = {
  production: false,
  security: true,
  oauth2Config: {
    url: 'http://localhost:8080',
    realm: 'java_microservices',
    clientId: 'book-management-web',
  },
  serviceUrl: 'http://localhost:10095/book-management',
};

import { IEnvironment } from './i-environment';

export const environment: IEnvironment = {
  production: false,
  security: true,
  oauth2Config: {
    url: 'http://localhost:8090',
    realm: 'sysdepro',
    clientId: 'sysdepro-web',
  },
  serviceUrl: 'http://localhost:10295/book-management-bff',
};

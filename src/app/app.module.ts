import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment.local';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookModule } from './feature/book/book.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BookModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (keycloak: KeycloakService) => {
        return () =>
          keycloak.init({
            config: { ...environment.oauth2Config! },
            initOptions: {
              checkLoginIframe: false,
              redirectUri: 'http://localhost:4200',
            },
          });
      },
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

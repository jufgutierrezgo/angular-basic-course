// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UsersPage } from './app/users/users.page';

bootstrapApplication(UsersPage, appConfig)
  .catch((err) => console.error(err));

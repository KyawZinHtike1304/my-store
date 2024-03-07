import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { RecipeService } from './service/recipe.service';
import { CartService } from './service/cart.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),RecipeService,CartService]
};

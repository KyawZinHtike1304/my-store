import { Routes } from '@angular/router';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { CartListComponent } from './recipes/cart-list/cart-list.component';

export const routes: Routes = [
    {
    path:'',redirectTo:'/home',pathMatch:'full',
    },
    {
        path:'home',component: RecipesListComponent
    },
    {
        path:'cart-list',component:CartListComponent
    },
    {
        path:'**',component:NotFoundComponent
    }
    
];

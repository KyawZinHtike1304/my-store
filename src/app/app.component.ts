import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CartService } from './service/cart.service';
import { Observable } from 'rxjs';
import { Recipe } from './model/recipe';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RecipesListComponent, NavbarComponent, FooterComponent,CommonModule,RouterModule]
})
export class AppComponent {
  
  cart$:Observable<Recipe[]> = this.cartService.cart$;
  constructor(public cartService:CartService){

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSubject:BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipes$:Observable<Recipe[]> = this.recipeSubject.asObservable();

  constructor(private http:HttpClient) { 
    this.getAllRecipes().subscribe();
  }

  public getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>('http://localhost:3000/recipes/')
    .pipe(
      tap(data => this.recipeSubject.next(data))
    )
  }
}

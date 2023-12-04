import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  template: `<div ngFor*="let article of articles" >
    <app-article-item ></app-article-item>
  </div>`,
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles:Article[]=[
    {id: 1, name: "Camiseta de mujer",  imageUrl:'../../assets/camiseta_mujer.jpeg', price: 12.50, isOnSale: true, quantityInCart: 12},
    {id: 2, name: "Pantalones vaqueros",  imageUrl:'../../assets/vaqueros.jpg', price: 25, isOnSale: true, quantityInCart: 10},
    {id: 3, name: "Zapatillas",  imageUrl:'../../assets/zapatillas.PNG', price: 35, isOnSale: true, quantityInCart: 5}
  ]
}

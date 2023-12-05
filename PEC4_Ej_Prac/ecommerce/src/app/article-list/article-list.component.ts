import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleQuantityChange } from '../article';

@Component({
  selector: 'app-article-list',
  template: `
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        <div *ngFor="let article of articles" >
          <app-article-item [article]="article" (changeQuantity)="onQuantityChange($event)"></app-article-item>
        </div>
      </div>
    </div>
  </div>  
`,
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles:Article[]=[
    {id: 1, name: "Camiseta de mujer",  imageUrl:'../../assets/camiseta_mujer.jpeg', price: 12.50, isOnSale: true, quantityInCart: 0},
    {id: 2, name: "Pantalones vaqueros",  imageUrl:'../../assets/vaqueros.jpg', price: 25, isOnSale: false, quantityInCart: 0},
    {id: 3, name: "Zapatillas",  imageUrl:'../../assets/zapatillas.PNG', price: 35, isOnSale: true, quantityInCart: 0}
  ]

  onQuantityChange(event: ArticleQuantityChange ):void{
    const {article, quantity} = event;
    const foundArticle = this.articles.find(a => a.id === article.id);

    if (foundArticle){
      foundArticle.quantityInCart = quantity;
    }
  }
}

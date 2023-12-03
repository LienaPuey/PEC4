import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  product: Article = {
    name: "Camiseta de mujer",
    imageUrl:'../../assets/camiseta_mujer.jpeg',
    price: 12.50,
    isOnSale: true,
    quantityInCart: 12
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  qtd = 0;
  totalPreco = 0;
  name = "Teste"
  number = 13123
  tel = "11123456789"
  email = "email@email.com"
  constructor(private productService: ProductService,) {
  }
  displayedColumns: string[] = ['photo','name', 'qtd', 'price'];
  dataSource = [];


  ngOnInit() {
    this.dataSource = JSON.parse(sessionStorage.getItem('lista'));
    this.dataSource.map(el=>{
      this.qtd += el.qtd;
      this.totalPreco += el.qtd*el.price;
    })
  }
}

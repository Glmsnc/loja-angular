import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss']
})
export class CestaComponent implements OnInit {
  qtd = 0;
  totalPreco = 0;
  constructor(private productService: ProductService,) {
  }
  displayedColumns: string[] = ['photo','name', 'qtd', 'price'];
  dataSource = [];


  ngOnInit() {
    this.productService.listBasket().subscribe(
      result => this.dataSource = result
    );
    //JSON.parse(sessionStorage.getItem('lista'));
    this.dataSource.map(el=>{
      this.qtd += el.qtd;
      this.totalPreco += el.qtd*el.price;
    })
   
  }
  addProduto(produto){
    this.qtd = 0;
    this.totalPreco =0;
    this.dataSource.map(el=>{
      if(produto.name === el.name) el.qtd++;
      this.qtd+= el.qtd;
      this.totalPreco += el.qtd*el.price;
      return el;
    })
    //sessionStorage.setItem('lista', JSON.stringify(this.dataSource))
  }
  subProduto(produto){
    
    this.qtd = 0;
    this.totalPreco =0;
    this.dataSource = this.dataSource.filter(el => {
      if(el.name === produto.name ) {
          el.qtd--;
          this.qtd+= el.qtd;
          this.totalPreco += el.qtd*el.price;
          if(el.qtd <=0) return false;
      }
      return true;
  })
  sessionStorage.setItem('lista', JSON.stringify(this.dataSource))
  }
  

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacao-cliente',
  templateUrl: './identificacao-cliente.component.html',
  styleUrls: ['./identificacao-cliente.component.scss']
})
export class IdentificacaoClienteComponent implements OnInit {

  

  IdFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    
    this.IdFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
  }

}

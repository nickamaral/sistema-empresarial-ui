import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { UploadEvent } from '../../interfaces/upload-event.interface';

@Component({
  selector: 'app-clientes-formulario-foto',
  templateUrl: './clientes-formulario-foto.component.html',
  styleUrls: ['./clientes-formulario-foto.component.scss']
})
export class ClientesFormularioFotoComponent {

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService){

  }
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      const id = params["id"]
      this.clientesService.buscaPorId(id).subscribe(cliente => console.log(cliente))
    })
    
}
onUpload(event: UploadEvent) {
  console.log(event)
}
}


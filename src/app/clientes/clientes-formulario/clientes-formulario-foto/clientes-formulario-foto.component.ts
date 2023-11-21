import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { UploadEvent } from '../../interfaces/upload-event.interface';
import { path } from 'src/app/shared/constants/path';

@Component({
  selector: 'app-clientes-formulario-foto',
  templateUrl: './clientes-formulario-foto.component.html',
  styleUrls: ['./clientes-formulario-foto.component.scss']
})
export class ClientesFormularioFotoComponent {
  botaoHabilitado = false
  foto?: File
  id: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService) {

  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"]
      this.clientesService.buscaPorId(this.id).subscribe(cliente => console.log(cliente))
    })

  }
  onUpload(event: UploadEvent) {
    console.log(event)
    this.foto = event.files[0]
    this.clientesService.mandaFoto(this.id, this.foto).subscribe(() => {
      this.router.navigateByUrl(``)
    })
  }
  }


import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

  public listCatalogo:any = [];
  private fileTmp:any;

getFile($event: any): void {
  const [ file ] = $event.target.files;
  this.fileTmp = {
    fileRaw:file,
    fileName:file.name,
  }
}
sendFile() {
  const body = new FormData();
  body.append('myfile', this.fileTmp.fileRaw, this.fileTmp.fileName)
  this.restServiceService.sendPost(body)
  .subscribe(res => console.log(res))
}

  catalogo = 'catalogo';
  constructor(private restServiceService: RestServiceService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restServiceService.get(`http://localhost:3001/api/storage`)
    .subscribe(respuesta => {
      this.listCatalogo = respuesta;
      console.log(this.listCatalogo.data)
      console.log("-----------")
      console.log(respuesta)
    })
  }
}

/*import { Component } from '@angular/core';
import { CompileurRequestResponse } from '../modelCompileur';
import { CompileurHttpService } from './compileur-http.service';

@Component({
  selector: 'app-compileur',
  templateUrl: './compileur.component.html',
  styleUrls: ['./compileur.component.scss']
})
export class CompileurComponent {
  compileurForm: CompileurRequestResponse = null;

  constructor(private compileurService: CompileurHttpService){}

  listCompileurs(): Array<CompileurRequestResponse>{
    return this.compileurService.findAll();
  }

  add(): void {
    this.compileurForm = new CompileurRequestResponse();
  }

  edit(id: number): void{
    this.compileurService.findById(id).subscribe(resp => {
      this.compileurForm = resp;
    })
  }

  remove(id: number): void{
    this.compileurService.remove(id);
  }

  save(): void {
    if(this.compileurForm.id) {
      this.compileurService.update(this.compileurForm);
    } else {
      this.compileurService.create(this.compileurForm);
    }

    this.cancel();
  }

  cancel():void{
    this.compileurForm = null;
  }
}*/
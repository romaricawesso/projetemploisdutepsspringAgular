import { Component } from '@angular/core';
import {Classes} from "../../../Models/Classes";
import {Router} from "@angular/router";
import {ClasseService} from "../../../Services/classe.service";

@Component({
  selector: 'app-ajouterclasses',
  templateUrl: './ajouterclasses.component.html',
  styleUrls: ['./ajouterclasses.component.css']
})
export class AjouterclassesComponent {


  classe: Classes = new Classes(0, "", "")

  constructor(
    private router: Router,
    private classeService: ClasseService
  ) {}

  onSubmit() {
    this.classeService.ajouterClasse(this.classe).subscribe()
    this.router.navigate(["listeclasse"])
  }



}

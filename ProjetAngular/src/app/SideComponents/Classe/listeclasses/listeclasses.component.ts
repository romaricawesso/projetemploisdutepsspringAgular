import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClasseService} from "../../../Services/classe.service";
import {Classes} from "../../../Models/Classes";
@Component({
  selector: 'app-listeclasses',
  templateUrl: './listeclasses.component.html',
  styleUrls: ['./listeclasses.component.css']
})
export class ListeclassesComponent implements OnInit{


  listeClasses: Classes[];

  ngOnInit() {
    this.classeService.classe().subscribe(
      (classes) => this.listeClasses = classes
    )
  }

  constructor(
    private router: Router,
    private classeService: ClasseService
  ) {}

  ajouterClasse() {
    this.router.navigate(["addclasse/add"])
  }

  modifierClasse(id: string) {
    this.router.navigate([`editclasse/edit/${id}`])
  }


  supprimerClasse(classe: Classes) {
    this.classeService.supprimerClasse(classe).subscribe()
    this.router.navigate(["listeclasse"])
  }


}

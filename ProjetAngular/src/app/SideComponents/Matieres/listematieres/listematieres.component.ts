import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Matieres} from "../../../Models/Matieres";
import {MatiereService} from "../../../Services/matiere.service";

@Component({
  selector: 'app-listematieres',
  templateUrl: './listematieres.component.html',
  styleUrls: ['./listematieres.component.css']
})
export class ListematieresComponent implements OnInit {

  recherche: String = "";

  listeMatieres: Matieres[];

  ngOnInit() {
    this.matiereService.matieres().subscribe((matieres) => this.listeMatieres = matieres);
  }

  constructor(
    private router: Router,
    private matiereService: MatiereService
  ) {}



  ajouterMatieres(){
    this.router.navigate(["addmatieres/add"])
  }

  modifierMatieres(id: string){
    this.router.navigate([`editmatieres/edit/${id}`])
  }

  supprimerMatiere(matiere: Matieres) {
    this.matiereService.supprimerMatiere(matiere).subscribe()
    this.router.navigate(["listematieres"])
  }

}

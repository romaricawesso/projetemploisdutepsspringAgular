import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EnseignantService} from "../../../Services/enseignant.service";
import {Enseignants} from "../../../Models/Enseignants";

@Component({
  selector: 'app-listeenseignants',
  templateUrl: './listeenseignants.component.html',
  styleUrls: ['./listeenseignants.component.css']
})
export class ListeenseignantsComponent implements OnInit{

  listeEnseignants: Enseignants[];
  recherche: String = "";

  constructor(
    private router: Router,
    private enseignantService: EnseignantService
  ) {}

  ngOnInit() {
    this.enseignantService.enseignants().subscribe(
      (enseignants) => this.listeEnseignants = enseignants
    );
  }

  ajouterEnseignant() {
    this.router.navigate(["addenseignant/add"])
  }

  modifierEnseignant(id: string) {
    this.router.navigate([`editenseignant/edit/${id}`])
  }

  supprimerEnseignant(enseignant: Enseignants) {
    this.enseignantService.supprimerEnseignant(enseignant).subscribe()
    this.router.navigate(["listeenseignant"])
  }


  }




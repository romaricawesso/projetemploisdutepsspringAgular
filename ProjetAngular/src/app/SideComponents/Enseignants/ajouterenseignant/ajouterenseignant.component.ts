import { Component } from '@angular/core';
import {EnseignantService} from "../../../Services/enseignant.service";
import {Router} from "@angular/router";
import {Enseignants} from "../../../Models/Enseignants";

@Component({
  selector: 'app-ajouterenseignant',
  templateUrl: './ajouterenseignant.component.html',
  styleUrls: ['./ajouterenseignant.component.css']
})
export class AjouterenseignantComponent {

  enseignant: Enseignants = new Enseignants(0, "", "", "", "", "")

  constructor(
    private router: Router,
    private enseignantService: EnseignantService
  ) {}
  onSubmit() {
    this.enseignantService.ajouterEnseignant(this.enseignant).subscribe();
    this.router.navigate(["listeenseignant"])

  }

}

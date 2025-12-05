import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AnneescolaireService} from "../../../Services/anneescolaire.service";
import {AnneeScolaire} from "../../../Models/AnneeScolaire";

@Component({
  selector: 'app-modifieranneescolaires',
  templateUrl: './modifieranneescolaires.component.html',
  styleUrls: ['./modifieranneescolaires.component.css']
})
export class ModifieranneescolairesComponent implements OnInit{
  anneeScolaire: AnneeScolaire;

  ngOnInit() {
    this.getAnneeScolaire();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private anneeScolaireService: AnneescolaireService
  ) {}

  private getAnneeScolaire() {
    const id = this.route.snapshot.paramMap.get("id");
    this.anneeScolaireService.findAnneeScolaireById(id).subscribe((anneeScolaire) => this.anneeScolaire = anneeScolaire);
  }

  onSubmit() {
    this.anneeScolaireService.modifierAnneeScolaire(this.anneeScolaire).subscribe();
    this.router.navigate(["listeannée"])
  }

}

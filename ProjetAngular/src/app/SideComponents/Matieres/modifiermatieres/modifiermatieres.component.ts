import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Matieres} from "../../../Models/Matieres";
import {MatiereService} from "../../../Services/matiere.service";

@Component({
  selector: 'app-modifiermatieres',
  templateUrl: './modifiermatieres.component.html',
  styleUrls: ['./modifiermatieres.component.css']
})
export class ModifiermatieresComponent implements OnInit {

  matiere : Matieres;

  ngOnInit() {
    this.getMatiere();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private matiereService: MatiereService
  ) {}

  private getMatiere() {
    const id = this.route.snapshot.paramMap.get("id");
    this.matiereService.findMatiereById(id).subscribe((matiere) => this.matiere = matiere);
  }

  onSubmit() {
    this.matiereService.modifierMatiere(this.matiere).subscribe();
    this.router.navigate(["listematieres"])
  }



}

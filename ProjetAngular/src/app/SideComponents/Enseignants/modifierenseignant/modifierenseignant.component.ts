import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Enseignants} from "../../../Models/Enseignants";
import {EnseignantService} from "../../../Services/enseignant.service";

@Component({
  selector: 'app-modifierenseignant',
  templateUrl: './modifierenseignant.component.html',
  styleUrls: ['./modifierenseignant.component.css']
})
export class ModifierenseignantComponent implements OnInit{

  enseignant: Enseignants

  ngOnInit() {
    this.getEnseignant()
  }

  constructor(
    private enseignantService: EnseignantService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  private getEnseignant() {
    const id = this.route.snapshot.paramMap.get("id");
    this.enseignantService.findEnseignantById(id).subscribe((enseignant) => this.enseignant = enseignant);
  }

  onSubmit() {
    this.enseignantService.modifierEnseignant(this.enseignant).subscribe();
    this.router.navigate(["listeenseignant"])
  }

}

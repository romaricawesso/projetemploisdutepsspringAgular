import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Classes} from "../../../Models/Classes";
import {ClasseService} from "../../../Services/classe.service";

@Component({
  selector: 'app-modifierclasses',
  templateUrl: './modifierclasses.component.html',
  styleUrls: ['./modifierclasses.component.css']
})
export class ModifierclassesComponent implements OnInit{

  classe: Classes;

  ngOnInit() {
    this.getClasse();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private classeService: ClasseService
  ) {}

  private getClasse() {
    const id = this.route.snapshot.paramMap.get("id");
    this.classeService.findClasseById(id).subscribe((classe) => this.classe = classe);
  }

  onSubmit() {
    this.classeService.modifierClasse(this.classe).subscribe();
    this.router.navigate(["listeclasse"])
  }

}

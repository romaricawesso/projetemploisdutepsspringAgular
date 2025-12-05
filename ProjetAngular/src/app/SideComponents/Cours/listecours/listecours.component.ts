import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Cours} from "../../../Models/Cours";
import {CoursService} from "../../../Services/cours.service";

@Component({
  selector: 'app-listecours',
  templateUrl: './listecours.component.html',
  styleUrls: ['./listecours.component.css']
})
export class ListecoursComponent implements OnInit {



  listeCours: Cours[];

  ngOnInit() {
    this.coursService.cours().subscribe(
      (cours) => this.listeCours = cours
    )
  }

  constructor(
    private router: Router,
    private coursService: CoursService
) {}

  ajouterCours() {
    this.router.navigate(["addcours/add"])
  }

  modifierCours(id: String) {
    this.router.navigate([`editcours/edit/${id}`])
  }

  supprimerCours(cours: Cours) {
    let response = confirm("Etes-vous sur ?")
    if (response) {
      this.coursService.supprimerCours(cours).subscribe()
      this.router.navigate(["listecours"])
    }
  }
}

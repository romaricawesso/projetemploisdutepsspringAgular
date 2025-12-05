import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmploisDuTemps} from "../../../Models/EmploisDuTemps";
import {EmploisdutempsService} from "../../../Services/emploisdutemps.service";

@Component({
  selector: 'app-listeemploisdutemps',
  templateUrl: './listeemploisdutemps.component.html',
  styleUrls: ['./listeemploisdutemps.component.css']
})
export class ListeemploisdutempsComponent implements OnInit {



  listeEmploiDuTemps: EmploisDuTemps[];

  ngOnInit() {
    this.emploiDuTempsService.emplois().subscribe(
      (emploiDuTemps) => this.listeEmploiDuTemps = emploiDuTemps
    )
  }

  constructor(
    private router: Router,
    private emploiDuTempsService: EmploisdutempsService,
  ) {}

  ajouterEmploiDuTemps() {
    this.router.navigate(["addemplois/add"])
  }

  modifierEmploiDuTemps(id: String) {
    this.router.navigate([`editemplois/edit/${id}`])
  }

  supprimerEmploiDuTemps(emploiDuTemps: EmploisDuTemps) {
    let response  = confirm("Etes-vous sur ?")
    if (response) {
      this.emploiDuTempsService.supprimerEmplois(emploiDuTemps).subscribe()
      this.router.navigate(["listeemplois"])
    }
  }


}

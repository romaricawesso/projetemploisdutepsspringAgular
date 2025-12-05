import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private router: Router
  ) {
  }


  // listeEnseignants() {
  //   this.router.navigate(["listeenseignant"])
  // }

  // listeClasses(){
  //   this.router.navigate(["listeclasse"])
  // }

  // listeMatieres(){
  //   this.router.navigate(["listematieres"])
  // }

  // listeCours(){
  //   this.router.navigate(["listecours"])
  // }

  // listeAnneeScolaire(){
  //   this.router.navigate(["listeannée"])
  // }
  //
  // listeEmploisDuTemps(){
  //   this.router.navigate(["listeemplois"])
  // }



}

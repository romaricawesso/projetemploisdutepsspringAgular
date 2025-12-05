import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeenseignantsComponent} from "./SideComponents/Enseignants/listeenseignants/listeenseignants.component";
import {AjouterenseignantComponent} from "./SideComponents/Enseignants/ajouterenseignant/ajouterenseignant.component";
import {ModifierenseignantComponent} from "./SideComponents/Enseignants/modifierenseignant/modifierenseignant.component";
import {DashbordComponent} from "./SideComponents/dashbord/dashbord.component";
import {
  ListeanneescolairesComponent
} from "./SideComponents/AnneeScolaire/listeanneescolaires/listeanneescolaires.component";
import {
  AjouteranneescolairesComponent
} from "./SideComponents/AnneeScolaire/ajouteranneescolaires/ajouteranneescolaires.component";
import {
  ModifieranneescolairesComponent
} from "./SideComponents/AnneeScolaire/modifieranneescolaires/modifieranneescolaires.component";
import {ListeclassesComponent} from "./SideComponents/Classe/listeclasses/listeclasses.component";
import {AjouterclassesComponent} from "./SideComponents/Classe/ajouterclasses/ajouterclasses.component";
import {ModifierclassesComponent} from "./SideComponents/Classe/modifierclasses/modifierclasses.component";
import {ListecoursComponent} from "./SideComponents/Cours/listecours/listecours.component";
import {AjoutercoursComponent} from "./SideComponents/Cours/ajoutercours/ajoutercours.component";
import {ModifiercoursComponent} from "./SideComponents/Cours/modifiercours/modifiercours.component";
import {
  ListeemploisdutempsComponent
} from "./SideComponents/EmploisduTemps/listeemploisdutemps/listeemploisdutemps.component";
import {
  AjouteremploisdutempsComponent
} from "./SideComponents/EmploisduTemps/ajouteremploisdutemps/ajouteremploisdutemps.component";
import {
  ModifieremploisdutempsComponent
} from "./SideComponents/EmploisduTemps/modifieremploisdutemps/modifieremploisdutemps.component";
import {ListematieresComponent} from "./SideComponents/Matieres/listematieres/listematieres.component";
import {AjoutermatieresComponent} from "./SideComponents/Matieres/ajoutermatieres/ajoutermatieres.component";
import {ModifiermatieresComponent} from "./SideComponents/Matieres/modifiermatieres/modifiermatieres.component";


const routes: Routes = [

  // url de racine
  { path:'', redirectTo:'dashbord',pathMatch:'full'},

  //dashbord
  { path:'dashbord', component:DashbordComponent},

  // Enseignants
  {path: "listeenseignant", component: ListeenseignantsComponent},
  {path: "addenseignant/add", component: AjouterenseignantComponent},
  {path: "editenseignant/edit/:id", component: ModifierenseignantComponent},

  //Annee scolaires
  { path:'listeannée', component:ListeanneescolairesComponent},
  { path:'addannéescolaire/add', component: AjouteranneescolairesComponent},
  { path:'editeannée/edit/:id', component:ModifieranneescolairesComponent},


  //Classes
  { path:'listeclasse', component:ListeclassesComponent},
  { path:'addclasse/add', component: AjouterclassesComponent},
  { path:'editclasse/edit/:id', component:ModifierclassesComponent},


  //Cours
  { path:'listecours', component:ListecoursComponent},
  { path:'addcours/add', component: AjoutercoursComponent},
  { path:'editcours/edit/:id', component:ModifiercoursComponent},


  //Emplois du temps
  { path:'listeemplois', component:ListeemploisdutempsComponent},
  { path:'addemplois/add', component: AjouteremploisdutempsComponent},
  { path:'editemplois/edit/:id', component:ModifieremploisdutempsComponent},


  //Matieres
  { path:'listematieres', component:ListematieresComponent},
  { path:'addmatieres/add', component: AjoutermatieresComponent},
  { path:'editmatieres/edit/:id', component:ModifiermatieresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

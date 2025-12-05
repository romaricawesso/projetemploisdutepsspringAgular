import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterOutlet, RouterLink, RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DashbordComponent } from './SideComponents/dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeenseignantsComponent } from './SideComponents/Enseignants/listeenseignants/listeenseignants.component';
import { AjouterenseignantComponent } from './SideComponents/Enseignants/ajouterenseignant/ajouterenseignant.component';
import { ModifierenseignantComponent } from './SideComponents/Enseignants/modifierenseignant/modifierenseignant.component';
import { ListecoursComponent } from './SideComponents/Cours/listecours/listecours.component';
import { AjoutercoursComponent } from './SideComponents/Cours/ajoutercours/ajoutercours.component';
import { ModifiercoursComponent } from './SideComponents/Cours/modifiercours/modifiercours.component';
import { ListematieresComponent } from './SideComponents/Matieres/listematieres/listematieres.component';
import { AjoutermatieresComponent } from './SideComponents/Matieres/ajoutermatieres/ajoutermatieres.component';
import { ModifiermatieresComponent } from './SideComponents/Matieres/modifiermatieres/modifiermatieres.component';
import { ListeclassesComponent } from './SideComponents/Classe/listeclasses/listeclasses.component';
import { AjouterclassesComponent } from './SideComponents/Classe/ajouterclasses/ajouterclasses.component';
import { ModifierclassesComponent } from './SideComponents/Classe/modifierclasses/modifierclasses.component';
import { ListeanneescolairesComponent } from './SideComponents/AnneeScolaire/listeanneescolaires/listeanneescolaires.component';
import { AjouteranneescolairesComponent } from './SideComponents/AnneeScolaire/ajouteranneescolaires/ajouteranneescolaires.component';
import { ModifieranneescolairesComponent } from './SideComponents/AnneeScolaire/modifieranneescolaires/modifieranneescolaires.component';
import { ListeemploisdutempsComponent } from './SideComponents/EmploisduTemps/listeemploisdutemps/listeemploisdutemps.component';
import { AjouteremploisdutempsComponent } from './SideComponents/EmploisduTemps/ajouteremploisdutemps/ajouteremploisdutemps.component';
import { ModifieremploisdutempsComponent } from './SideComponents/EmploisduTemps/modifieremploisdutemps/modifieremploisdutemps.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    NavbarComponent,
    ListeenseignantsComponent,
    AjouterenseignantComponent,
    ModifierenseignantComponent,
    DashbordComponent,
    ListecoursComponent,
    AjoutercoursComponent,
    ModifiercoursComponent,
    ListematieresComponent,
    AjoutermatieresComponent,
    ModifiermatieresComponent,
    ListeclassesComponent,
    AjouterclassesComponent,
    ModifierclassesComponent,
    ListeanneescolairesComponent,
    AjouteranneescolairesComponent,
    ModifieranneescolairesComponent,
    ListeemploisdutempsComponent,
    AjouteremploisdutempsComponent,
    ModifieremploisdutempsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





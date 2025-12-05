import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {AnneeScolaire} from "../Models/AnneeScolaire";



@Injectable({
  providedIn: 'root'
})
export class AnneescolaireService {

  constructor(
    private http: HttpClient
  ) { }


  anneeScolaire(): Observable<AnneeScolaire[]> {
    return this.http.get<AnneeScolaire[]>("http://localhost:8080/annee");
  }

  ajouterAnneeScolaire(annéeScolaire : AnneeScolaire) {
    return this.http.post<AnneeScolaire>("http://localhost:8080/annee", annéeScolaire);
  }

  modifierAnneeScolaire(annéeScolaire : AnneeScolaire) {
    return this.http.put(`http://localhost:8080/annee/${annéeScolaire.id}`, annéeScolaire);
  }

  supprimerAnneeScolaire(annéeScolaire:AnneeScolaire){
    return this.http.delete(`http://localhost:8080/annee/${annéeScolaire.id}`);
  }

  findAnneeScolaireById(id: string | null): Observable<AnneeScolaire> {
    return this.http.get<AnneeScolaire>(`http://localhost:8080/annee/get/${id}`);
  }


}

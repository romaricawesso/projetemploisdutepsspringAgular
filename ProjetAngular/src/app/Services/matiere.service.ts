import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Matieres} from "../Models/Matieres";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(
    private http: HttpClient
  ) { }


  matieres(): Observable<Matieres[]> {
    return this.http.get<Matieres[]>("http://localhost:8080/matiere");
  }

  ajouterMatiere(matiere: Matieres) {
    return this.http.post<Matieres>("http://localhost:8080/matiere", matiere);
  }

  modifierMatiere(matiere: Matieres) {
    return this.http.put(`http://localhost:8080/matiere/${matiere.id}`, matiere);
  }

  supprimerMatiere(matiere: Matieres) {
    return this.http.delete(`http://localhost:8080/matiere/${matiere.id}`);
  }

  findMatiereById(id: string | null): Observable<Matieres> {
    return this.http.get<Matieres>(`http://localhost:8080/matiere/get/${id}`);
  }
}

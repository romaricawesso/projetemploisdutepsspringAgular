import { Injectable } from '@angular/core';
import {Enseignants} from "../Models/Enseignants";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(
    private http: HttpClient
  ) { }


  enseignants(): Observable<Enseignants[]> {
    return this.http.get<Enseignants[]>("http://localhost:8080/enseignant");
  }

  ajouterEnseignant(enseignant: Enseignants) {
    return this.http.post<Enseignants>("http://localhost:8080/enseignant", enseignant);
  }

  modifierEnseignant(enseignant: Enseignants) {
    return this.http.put(`http://localhost:8080/enseignant/${enseignant.id}`, enseignant);
  }

  supprimerEnseignant(enseignant: Enseignants){
    return this.http.delete(`http://localhost:8080/enseignant/${enseignant.id}`);
  }

  findEnseignantById(id: string | null): Observable<Enseignants> {
    return this.http.get<Enseignants>(`http://localhost:8080/enseignant/get/${id}`);
  }


}

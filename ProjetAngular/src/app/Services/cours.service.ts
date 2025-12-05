import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {AnneeScolaire} from "../Models/AnneeScolaire";
import {Cours} from "../Models/Cours";



@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private http: HttpClient
  ) { }


  cours(): Observable<Cours[]> {
    return this.http.get<Cours[]>("http://localhost:8080/cours");
  }

  ajouterCours(cours : Cours) {
    return this.http.post<Cours>("http://localhost:8080/cours", cours);
  }

  modifierCours(cours : Cours) {
    return this.http.put(`http://localhost:8080/cours/${cours.id}`, cours);
  }

  supprimerCours(cours:Cours){
    return this.http.delete(`http://localhost:8080/cours/${cours.id}`);
  }

  findCoursById(id: string | null): Observable<Cours> {
    return this.http.get<Cours>(`http://localhost:8080/cours/get/${id}`);
  }


}

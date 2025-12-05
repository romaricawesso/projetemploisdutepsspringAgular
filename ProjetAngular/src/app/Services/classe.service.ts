import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Classes} from "../Models/Classes";


@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(
    private http: HttpClient
  ) { }


  classe(): Observable<Classes[]> {
    return this.http.get<Classes[]>("http://localhost:8080/classe");
  }

  ajouterClasse(classes : Classes) {
    return this.http.post<Classes>("http://localhost:8080/classe", classes);
  }

  modifierClasse(classes : Classes) {
    return this.http.put(`http://localhost:8080/classe/${classes.id}`, classes);
  }

  supprimerClasse(classes:Classes){
    return this.http.delete(`http://localhost:8080/classe/${classes.id}`);
  }

  findClasseById(id: string | null): Observable<Classes> {
    return this.http.get<Classes>(`http://localhost:8080/classe/get/${id}`);
  }


}

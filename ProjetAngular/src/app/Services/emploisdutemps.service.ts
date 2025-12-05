import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {EmploisDuTemps} from "../Models/EmploisDuTemps";




@Injectable({
  providedIn: 'root'
})
export class EmploisdutempsService {

  constructor(
    private http: HttpClient
  ) { }


  emplois(): Observable<EmploisDuTemps[]> {
    return this.http.get<EmploisDuTemps[]>("http://localhost:8080/emplois");
  }

  ajouterEmplois(emploisDuTemps : EmploisDuTemps) {
    return this.http.post<EmploisDuTemps>("http://localhost:8080/emplois", emploisDuTemps);
  }

  modifierEmplois(emploisDuTemps : EmploisDuTemps) {
    return this.http.put(`http://localhost:8080/emplois/${emploisDuTemps.id}`, emploisDuTemps);
  }

  supprimerEmplois(emploisDuTemps:EmploisDuTemps){
    return this.http.delete(`http://localhost:8080/emplois/${emploisDuTemps.id}`);
  }

  findEmploisById(id: string | null): Observable<EmploisDuTemps> {
    return this.http.get<EmploisDuTemps>(`http://localhost:8080/emplois/get/${id}`);
  }


}

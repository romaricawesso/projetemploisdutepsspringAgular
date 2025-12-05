import {Time} from "@angular/common";
import {Enseignants} from "./Enseignants";
import {Cours} from "./Cours";
import {Classes} from "./Classes";

export class EmploisDuTemps{
  constructor(
    public id: Number,
    public enseignant: Enseignants,
    public cours: Cours,
    public heureDebut: String,
    public heureFin: String,
    public classe: Classes
  ) {}


}

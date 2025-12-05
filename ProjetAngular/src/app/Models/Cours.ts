import {Matieres} from "./Matieres";
import {Classes} from "./Classes";
import {AnneeScolaire} from "./AnneeScolaire";
import {Enseignants} from "./Enseignants";

export  class  Cours{

  constructor(
    public id: Number,
    public anneeScolaire: AnneeScolaire,
    public classe: Classes,
    public enseignant: Enseignants,
    public matiere: Matieres
  ) {}










 }

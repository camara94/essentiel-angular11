import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/shared/livre';
import { LIVRES } from 'src/shared/livres';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  titre: string = 'La liste des livres';
  livres: Livre[] = LIVRES;
  affiche: boolean = true;
  size: number = 80;
  constructor() { }

  ngOnInit(): void {
  }

  get getDescription(): string {
    return 'La description des livres.';
  }

  affichage(): void {
    this.affiche = !this.affiche;
    console.log(this.affiche);
  }

}

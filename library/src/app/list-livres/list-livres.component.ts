import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  titre: string = 'La liste des livres';
  constructor() { }

  ngOnInit(): void {
  }

  get getDescription(): string {
    return 'La description des livres.';
  }

}

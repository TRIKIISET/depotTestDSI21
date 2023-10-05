import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsi-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent {
 @Input() nom!:string;
 @Input() age:number=0;
 @Input('estEtudiant') isEtudiant!:boolean;
}

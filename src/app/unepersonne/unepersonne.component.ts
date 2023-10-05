import { Component, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'dsi-unepersonne',
  templateUrl: './unepersonne.component.html',
  styleUrls: ['./unepersonne.component.css']
})
export class UnepersonneComponent {
   @Input() personne: Personne;
}

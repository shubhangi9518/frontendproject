import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {

  title="running property binding Angular";

  active:boolean=true;

  imagepath="https://picsum.photos/536/354?a";


}

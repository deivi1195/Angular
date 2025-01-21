import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../Services/bdz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {

  constructor ( public dbzService: DbzService ) {

    

  }

}

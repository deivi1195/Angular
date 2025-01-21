import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../Services/bdz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {

  constructor ( private dbzService: DbzService ) {}

  get characters(): Character[] {

    return [...this.dbzService.character];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( characters: Character ): void {

    this.dbzService.addCharacter( characters );
  }



}

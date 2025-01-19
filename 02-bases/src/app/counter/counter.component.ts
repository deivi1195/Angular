import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>


    <button (click)="increaseCounter(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseCounter(-1)">-1</button>
  `,
  standalone: false,
})
export class CounterComponent {

  public counter: number = 10;

  increaseCounter(value: number): void {
    this.counter += 1;
  }

  resetCounter(){
    this.counter = 10;
  }

}








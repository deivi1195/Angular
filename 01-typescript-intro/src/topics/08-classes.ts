

// export class Person {
//     public name: string;
//     private address: string;

//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

export class Person {
    
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No address'
    ) {}
}

// export class Hero extends Person {
    
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName?: string,
//     ) {
//         super( realName || alterEgo, 'New York' ); // Super es el constructor del padre (Persona)
//     }
// }

//composicion
export class Hero {
    
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person, // lo declaro en el constructor
    ) {
        //this.person = new Person( realName);
    }
}
//instanciar person
const deivi = new Person('Deivi', 'Gonzalez', 'New York');

//instanciar hero, que consume la informacion person
const ironman = new Hero('Ironman', 35, 'Deivi', deivi);

console.log(ironman);

















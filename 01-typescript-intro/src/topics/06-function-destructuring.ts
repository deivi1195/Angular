
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCaculationOptions {
    tax: number;
    products: Product[];
}


//function taxCalculation( options: TaxCaculationOptions ): number[] {
//     let total = 0;    
//     options.products.forEach( ({ price }) => {
//         total += price;
//     });

//     return [total, total * options.tax]
// }
// function taxCalculation( { tax, products }: TaxCaculationOptions ): [number, number] {

//     let total = 0;    
//     products.forEach( ({ price }) => {
//         total += price;
//     });

//     return [total, total * tax]
// }
export function taxCalculation( options: TaxCaculationOptions ): [number, number] {

    const { tax, products } = options; 

    let total = 0;    
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax: tax,  //tambien puede ser solamente tax por que tienen los mismos nombres de la variable y del interface
});



console.log('Total: ', total);
console.log('Tax: ', taxResult);




export {};
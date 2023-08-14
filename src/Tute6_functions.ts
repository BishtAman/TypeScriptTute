// always annotate the function with its return or parameter type
function calculateTax(income: number, taxYear = 2022): undefined{
    if(income>taxYear){
        // return income + 20_000; // it will throw an error due to function return undefined
    }
    // return taxYear + 10 // change function return type to number to make this line valid
}
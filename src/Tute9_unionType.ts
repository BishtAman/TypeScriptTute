// union type: |
function kgToLbs(weight: number | string): number{
    // Narrowing
    if(typeof weight === 'number')
        return weight + 10;
    return parseInt(weight) - 10;
}
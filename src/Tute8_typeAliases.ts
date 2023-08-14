// if I want to declare another object with same annotations then I will have to repeat the same code so here I can use 'type' like this:
type Employee = {
    readonly id: number, 
    name: string }
    
let employees: Employee = 
    {
    id: 1, 
    name: 'Aman'
    }
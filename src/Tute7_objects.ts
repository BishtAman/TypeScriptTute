// ? refers to optional property access operator
let employee: {
    readonly id: number, 
    name: string } = 
    {
    id: 1, 
    name: 'Aman'
    }
// here I have used readonly property that indicates that id can only be assigned during initialization but cannot be changed afterwards.
type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Resizable;
// type UIWidget = Draggable | Resizable; // for intersection (to take any of the 2 values)
let textBox: UIWidget = {
    drag(){},
    resize(){}
}
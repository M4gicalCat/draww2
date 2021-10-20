import {Canvas, Rect, Group, Ellipse} from "../lib/draww2.js";

let c = new Canvas(1000, 1000);
//let fond = new Rect(0, 0, "blue", 1000, 1000, c);
let r = new Rect(0, 0, "red", 50, 50, c);
let e = new Ellipse(-100, 0, 20, 40, "blue", c);
let g = new Group(600, 600, c);
g.width = 50
g.height = 50
//let p = new Picture(100, 0, "./OWO.gif", 100, 100, c);
g.centerOfRotation = [25, 25];
g.appendShapes([r, e]);
c.animate(100);

g.updateMe = function (){
    this.rotate -= 1
}
e.up = true
e.updateMe = function (){
    if (this.up) {
        this.x++
        if (this.x > 100){
            this.up = false;
        }
    }
    else {
        this.x --
        if (this.x <= -100)
            this.up = true;

    }
}

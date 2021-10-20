<h1>Download</h1>

Download this repo and run `npm i` <br>
Then, run `tsc` <br>

The JS files wil go in directory `<Project root>/lib/`

<h1>Using the library</h1>

This library uses the `<canvas>` HTML tag to create and display shapes in an HTML page.

To do so, type :

```js
import {Canvas, Rect /*, whatever you need to import*/} from "/lib/draww2.js";

let canvas = new Canvas(500 /*width*/, 500 /*height*/);
let rect = new Rect(50 /*x*/, 50 /*y*/, "red", 50 /*width*/, 50 /*height*/, canvas);
```

and then, you have two choices :

 - if you only want to display the canvas once, do :
```js
canvas.nextFrame();
```
 - if you want to animate the canvas, type :
```js
canvas.animate( 15 /*fps*/ /* /!\ the value 0 will stop the animation*/);
```

to make a shape behave specifically, type :
```js
rect.updateMe = function (){
    this.x += 2;
    /*etc*/
}
```
Your rectangle will now move 2px to the left at every frame.


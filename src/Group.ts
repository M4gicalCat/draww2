import Canvas from "./Canvas.js";
import Shape from "./Shape.js";

export default class Group extends Shape{
    protected _centerOfRotation :number[];
    private _width :number;
    private _height :number;
    protected _shapes :Shape[];
    protected differentielX :number;
    protected differentielY :number;

    /**
     * Creates a Group of Shapes, so that it becomes easier to move them if they need to be part of the same object
     * @param x
     * @param y
     * @param canvas
     */
    public constructor(x :number, y :number, canvas :Canvas) {
        super(x, y, canvas);
        this._centerOfRotation = [x, y];
        this._width = 0;
        this._height = 0;
        this._shapes = [];
        this.differentielX = 0;
        this.differentielY = 0;
    }

    /**
     * Adds a specific Shape to the Group (removes it from the Canvas)
     * @param s
     */
    public appendShape(s :Shape) :void{
        this.canvas.removeShape(s);
        this._shapes.push(s);
    }

    /**
     * Adds all Shapes to the Group (calls `appendShape()`)
     * @param s
     */
    public appendShapes(s :Shape[]) :void{
        for (let i = 0 ; i < s.length; i++){
            this.appendShape(s[i]);
        }
    }

    /**
     * Removes the Shape from the Group and puts it back in the Canvas.
     * @param s
     */
    public removeShape(s :Shape) :boolean{
        for (let i = 0; i < this._shapes.length; i++) {
            if (this._shapes[i] === s) {
                this._shapes.splice(i, 1);
                this.canvas.appendShape(s);
                return true;
            }
        }
        return false
    }

    /**
     * Removes all Shapes from the Group and put them back in the Canvas (calls `removeShape()`)
     * @param s
     */
    public removeShapes(s :Shape[]) :Shape[]{
        let result :Shape[] = [];
        for (let i = 0; i < s.length; i++){
            if (this.removeShape(s[i]))
                result.push(s[i])
        }
        return result;
    }

    set centerOfRotation(coordinates: number[]) {
        this.differentielX = coordinates[0]
        this.differentielY = coordinates[1]
        this._centerOfRotation = [this.x + coordinates[0], this.y + coordinates[1]];
    }

    drawwMe(): void {
        let ctx = this._canvas.context;
        ctx.save();
        ctx.translate(this._centerOfRotation[0], this._centerOfRotation[1]);
        if (this._rotate !== 0) {
            ctx.rotate(this._rotate * Math.PI / 180);
        }
        for (let i = 0; i < this._shapes.length; i++){
            this._shapes[i].updateMe();
            this._shapes[i].x -= this.differentielX
            this._shapes[i].y -= this.differentielY
            if (this._shapes[i].visible)
                this._shapes[i].drawwMe();
            this._shapes[i].x += this.differentielX
            this._shapes[i].y += this.differentielY
        }
        ctx.restore()
    }

    updateMe(): void {
    }


    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
}
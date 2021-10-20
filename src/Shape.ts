import Canvas from "./Canvas";

export default abstract class Shape{
    private _x :number;
    private _y :number;
    protected _visible :boolean;
    protected _canvas : Canvas;
    protected _fillStyle: "fill" | "stroke";
    protected _rotate :number;

    protected constructor(x :number, y :number, canvas :Canvas) {
        this._x = x;
        this._y = y;
        this._visible = true;
        this._canvas = canvas;
        this._fillStyle = "fill";
        this._rotate = 0;

        this._canvas.appendShape(this);
    }

    /**
     * The method used to draww the object on a canvas.
     * If you create a Shape :
     * Use the <canvas> tag documentation here :<https://www.w3schools.com/html/html5_canvas.asp>
     */
    public abstract drawwMe() :void;

    /**
     * The method you have to create to make the Shape move.
     */
    public abstract updateMe() :void;

    /**
     * Changes the center of rotation.
     * [0, 0] is the top left corner.
     * Can be negative.
     * Unit : px
     * Default : center of the Shape
     * @param coordinates
     * [x, y]
     */
    public abstract set centerOfRotation(coordinates :number[]);

    public abstract get centerOfRotation() :number[];

    public get visible() :boolean{
        return this._visible;
    }

    public set visible(value){
        this._visible = value;
    }

    public set fill(value :boolean){
        this._fillStyle = value ? "fill" : "stroke";
    }

    public get fill() :boolean{
        return this._fillStyle === "fill";
    }

    get rotate(): number {
        return this._rotate;
    }

    set rotate(value: number) {
        this._rotate = value;
    }

    set canvas(canvas :Canvas){
        this._canvas = canvas;
    }
    get canvas() :Canvas{
        return this._canvas;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}
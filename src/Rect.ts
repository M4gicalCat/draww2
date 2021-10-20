import Shape from "./Shape.js";
import Canvas from "./Canvas.js";

export default class Rect extends Shape{
    protected _color  :string;
    protected _width  :number;
    protected _height :number;
    protected _centerOfRotation :number[];
    public constructor(x :number, y :number, color :string, width :number, height :number, canvas :Canvas) {
        super(x, y, canvas);
        this._color = color;
        this._width = width;
        this._height = height;
        this._centerOfRotation = [width/2, height/2];
    }

    drawwMe() :void {
        const ctx = this._canvas.context;
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x + this._centerOfRotation[0], this.y + this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        eval(`ctx.${this._fillStyle}Style = "${this._color}"`);
        ctx.rect(-this._centerOfRotation[0], -this._centerOfRotation[1], this._width, this._height);
        eval(`ctx.${this._fillStyle}()`);
        ctx.restore();
    }

    public updateMe() {}

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
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

    set centerOfRotation(coordinates: number[]) {
        this._centerOfRotation = coordinates;
    }

    get centerOfRotation() :number[]{
        return this._centerOfRotation;
    }
}
import Shape from "./Shape.js";
import Canvas from "./Canvas.js";

export default class Triangle extends Shape{
    protected _x2: number;
    protected _y2: number;
    protected _x3: number;
    protected _y3: number;
    protected _color :string;
    protected _centerOfRotation :number[];

    constructor(x1 :number, y1 :number, x2 :number, y2 :number, x3 :number, y3 :number, color :string, canvas :Canvas) {
        super(x1, y1, canvas);

        this._x2 = x2;
        this._y2 = y2;
        this._x3 = x3;
        this._y3 = y3;
        this._color = color;
        this._centerOfRotation = [(x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3];
    }

    drawwMe(): void {
        const ctx = this._canvas.context;
        ctx.save();
        ctx.beginPath();
        ctx.translate(this._centerOfRotation[0],this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        eval(`ctx.${this._fillStyle}Style = "${this._color}"`);
        ctx.moveTo(this.x - this._centerOfRotation[0] , this.y - this._centerOfRotation[1]);
        ctx.lineTo(this._x2 - this._centerOfRotation[0] , this._y2 - this._centerOfRotation[1]);
        ctx.lineTo(this._x3 - this._centerOfRotation[0], this._y3 - this._centerOfRotation[1]);
        ctx.lineTo(this.x - this._centerOfRotation[0], this.y - this._centerOfRotation[1]);
        eval(`ctx.${this._fillStyle}()`);
        ctx.restore();
    }

    updateMe(): void {    }

    public set centerOfRotation(coordinates: number[]) {
        this._centerOfRotation = [
            coordinates[0] + Math.min(this.x, this._x2, this._x3),
            coordinates[1] + Math.min(this.y, this._y2, this._y3)
        ];
    }
    public get centerOfRotation(): number[] {
        return this._centerOfRotation;
    }
}

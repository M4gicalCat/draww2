import Shape from "./Shape.js";
import Canvas from "./Canvas.js";

export default class Picture extends Shape{
    protected _link: string;
    protected _width: number;
    protected  _height :number;
    protected _centerOfRotation :number[];
    protected _tagImage :HTMLImageElement;

    public constructor(x :number, y :number, link :string, width :number, height :number, canvas :Canvas) {
        super(x, y, canvas);
        this._link = link;
        this._width = width;
        this._height = height;
        this._centerOfRotation = [x, y];

        (this._tagImage = document.createElement("img")).src = this._link;
    }

    set centerOfRotation(coordinates: number[]) {
    }

    drawwMe(): void {
        let ctx = this.canvas.context;
        ctx.save();
        ctx.translate(this.x + this._centerOfRotation[0], this.y + this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        ctx.drawImage(this._tagImage,-this._centerOfRotation[0], -this._centerOfRotation[1], this._width, this._height);
        ctx.restore();
    }

    updateMe(): void {
    }

}
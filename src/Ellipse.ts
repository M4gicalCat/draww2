import Shape from "./Shape.js";
import Canvas from "./Canvas.js";

export default class Ellipse extends Shape{

    protected _color:      string;
    protected _width:    number;
    protected _height:    number;
    protected _startAngle: number;
    protected _endAngle:   number;
    protected _centerOfRotation : number[]
    constructor(x:          number,
                y:          number,
                width:      number,
                height:     number,
                color:      string,
                canvas:     Canvas,
                startAngle?: number,
                endAngle?:   number) {
        super(x, y, canvas);
        this._color = color;
        this._width = width;
        this._height = height;
        this._startAngle = startAngle ? startAngle : 0;
        this._endAngle = endAngle ? endAngle : Math.PI * 2;
        this._centerOfRotation = [width/2, height/2];
    }

    drawwMe(): void {
        const ctx = this._canvas.context;
        ctx.beginPath();
        eval(`ctx.${this._fillStyle}Style = "${this._color}"`);
        ctx.ellipse(this.x, this.y, this._width, this._height, this._rotate * Math.PI/180, this._startAngle, this._endAngle);
        eval(`ctx.${this._fillStyle}()`);
    }

    updateMe(): void {
    }


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

    get startAngle(): number {
        return this._startAngle;
    }

    set startAngle(value: number) {
        this._startAngle = value;
    }

    get endAngle(): number {
        return this._endAngle;
    }

    set endAngle(value: number) {
        this._endAngle = value;
    }

    public set centerOfRotation(coordinates: number[]) {
        this._centerOfRotation = coordinates;
    }
    public get centerOfRotation(): number[] {
        return this._centerOfRotation;
    }
}
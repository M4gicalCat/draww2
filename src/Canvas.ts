import Shape from "./Shape.js";

export default class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D;
    private shapes: Shape[];
    private _width: number;
    private _height: number;
    private interval :number;

    /**
     * Creates a canvas and adds it to the `document.body`
     * @param width
     * @param height
     */
    constructor(width: number, height: number) {
        this.canvas = document.createElement("canvas");
        if (!this.canvas.getContext) {
            throw new DOMException("Your browser doesn't support the canvas tag", "unsupported tag");
        }
        document.body.appendChild(this.canvas);
        this._context = this.canvas.getContext("2d")!;
        this._width = width;
        this._height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.shapes = [];
        this.interval = 0;
    }

    /**
     * @return
     * the context of the Canvas, used to draw Shapes on it
     */
    get context(): CanvasRenderingContext2D {
        return this._context;
    }

    set width(width) {
        this.canvas.width = width;
        this._width = width;
    }

    get width() {
        return this._width;
    }

    set height(height) {
        this.canvas.height = height;
        this._height = height;
    }

    get height() {
        return this._height;
    }

    /**
     * adds a Shape to the Canvas
     * @param shape
     * The Shape to add
     */
    public appendShape(shape: Shape): void {
        this.shapes.push(shape);
    }

    /**
     * adds all Shapes to the Canvas (calls appendShape())
     * @param shapes
     * The Shapes to add
     */
    public appendShapes(shapes: Shape[]): void {
        shapes.forEach(shape => {
            this.appendShape(shape);
        });
    }

    /**
     * removes a Shape from the Canvas
     * @param shape
     * the Shape to be removed
     */
    public removeShape(shape: Shape): boolean {
        for (let i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i] === shape) {
                this.shapes.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * removes all Shapes from the Canvas
     * @param shapes
     * the Shapes to be removed
     * @return
     * The Shapes that have been successfully removed
     */
    public removeShapes(shapes: Shape[]): Shape[] {
        let result: Shape[] = [];
        shapes.forEach(shape => {
            if (this.removeShape(shape))
                result.push(shape);
        })
        return result;
    }

    /**
     * Used to display the next frame.
     */
    public nextFrame(): void {
        this.context.clearRect(0, 0, this.width, this.height);
        this.shapes.forEach(shape => {
            shape.updateMe();
            if (shape.visible)
                shape.drawwMe();
        });
    }

    public animate(fps :number) :void{
        clearInterval(this.interval);
        if (fps > 0){
            let that = this;
            this.interval = setInterval(function (){
                that.nextFrame();
            }, 1000/fps);
        }
        else if (fps !== 0) throw new Error("fps must be positive")
    }
}

import Shape from "./Shape.js";

export default class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D;
    private readonly shapes: Shape[];
    private _width: number;
    private _height: number;
    private interval: any;

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
     * adds all Shapes to the Canvas (calls appendShape())
     * @param shapes
     * The Shapes to add
     */
    public appendShapes(...shapes: Shape[]): void {
        shapes.forEach(shape => {
            this.shapes.push(shape);
        });
    }

    /**
     * removes every given Shapes from the Canvas
     * @param shapes
     * the Shapes to be removed
     * @return
     * The Shapes that have been successfully removed
     */
    public removeShapes(...shapes: Shape[]): Shape[] {
        let result: Shape[] = [];
        shapes.forEach(s => {
            const index = this.shapes.indexOf(s);
            if (index !== -1) {
                result.push(...this.shapes.splice(index, 1));
            }
        });
        return result;
    }

    /**
     * Used to display the next frame.
     */
    public nextFrame(): void {
        this.context.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].updateMe();
            if (this.shapes[i].visible)
                this.shapes[i].drawwMe();
        }
    }

    /**
     * Animates the canvas.
     * @param fps
     * The number of frames per seconds you want. Default value is 60.
     */
    public animate(fps ?:number) :void{
        fps = fps ?? 60;
        clearInterval(this.interval);
        if (fps > 0){
            let that = this;
            this.interval = setInterval(function (){
                window.requestAnimationFrame(function(){that.nextFrame()});
            }, 1000/fps);
        }
    }
}

var Canvas = /** @class */ (function () {
    /**
     * Creates a canvas and adds it to the `document.body`
     * @param width
     * @param height
     */
    function Canvas(width, height) {
        this.canvas = document.createElement("canvas");
        if (!this.canvas.getContext) {
            throw new DOMException("Your browser doesn't support the canvas tag", "unsupported tag");
        }
        document.body.appendChild(this.canvas);
        this._context = this.canvas.getContext("2d");
        this._width = width;
        this._height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.shapes = [];
        this.interval = 0;
    }
    Object.defineProperty(Canvas.prototype, "context", {
        /**
         * @return
         * the context of the Canvas, used to draw Shapes on it
         */
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this.canvas.width = width;
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this.canvas.height = height;
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * adds a Shape to the Canvas
     * @param shape
     * The Shape to add
     */
    Canvas.prototype.appendShape = function (shape) {
        this.shapes.push(shape);
    };
    /**
     * adds all Shapes to the Canvas (calls appendShape())
     * @param shapes
     * The Shapes to add
     */
    Canvas.prototype.appendShapes = function (shapes) {
        var _this = this;
        shapes.forEach(function (shape) {
            _this.appendShape(shape);
        });
    };
    /**
     * removes a Shape from the Canvas
     * @param shape
     * the Shape to be removed
     */
    Canvas.prototype.removeShape = function (shape) {
        for (var i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i] === shape) {
                this.shapes.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * removes all Shapes from the Canvas
     * @param shapes
     * the Shapes to be removed
     * @return
     * The Shapes that have been successfully removed
     */
    Canvas.prototype.removeShapes = function (shapes) {
        var _this = this;
        var result = [];
        shapes.forEach(function (shape) {
            if (_this.removeShape(shape))
                result.push(shape);
        });
        return result;
    };
    /**
     * Used to display the next frame.
     */
    Canvas.prototype.nextFrame = function () {
        this.context.clearRect(0, 0, this.width, this.height);
        this.shapes.forEach(function (shape) {
            shape.updateMe();
            if (shape.visible)
                shape.drawwMe();
        });
    };
    Canvas.prototype.animate = function (fps) {
        clearInterval(this.interval);
        if (fps > 0) {
            var that_1 = this;
            this.interval = setInterval(function () {
                that_1.nextFrame();
            }, 1000 / fps);
        }
        else if (fps !== 0)
            throw new Error("fps must be positive");
    };
    return Canvas;
}());
export default Canvas;

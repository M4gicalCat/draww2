var Shape = /** @class */ (function () {
    function Shape(x, y, canvas) {
        this._x = x;
        this._y = y;
        this._visible = true;
        this._canvas = canvas;
        this._fillStyle = "fill";
        this._rotate = 0;
        this._canvas.appendShape(this);
    }
    Object.defineProperty(Shape.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "fill", {
        get: function () {
            return this._fillStyle === "fill";
        },
        set: function (value) {
            this._fillStyle = value ? "fill" : "stroke";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "rotate", {
        get: function () {
            return this._rotate;
        },
        set: function (value) {
            this._rotate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Shape;
}());
export default Shape;

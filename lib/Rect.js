var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Shape from "./Shape.js";
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, color, width, height, canvas) {
        var _this = _super.call(this, x, y, canvas) || this;
        _this._color = color;
        _this._width = width;
        _this._height = height;
        _this._centerOfRotation = [width / 2, height / 2];
        return _this;
    }
    Rect.prototype.drawwMe = function () {
        var ctx = this._canvas.context;
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x + this._centerOfRotation[0], this.y + this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        eval("ctx." + this._fillStyle + "Style = \"" + this._color + "\"");
        ctx.rect(-this._centerOfRotation[0], -this._centerOfRotation[1], this._width, this._height);
        eval("ctx." + this._fillStyle + "()");
        ctx.restore();
    };
    Rect.prototype.updateMe = function () { };
    Object.defineProperty(Rect.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "centerOfRotation", {
        get: function () {
            return this._centerOfRotation;
        },
        set: function (coordinates) {
            this._centerOfRotation = coordinates;
        },
        enumerable: true,
        configurable: true
    });
    return Rect;
}(Shape));
export default Rect;

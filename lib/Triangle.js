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
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(x1, y1, x2, y2, x3, y3, color, canvas) {
        var _this = _super.call(this, x1, y1, canvas) || this;
        _this._x2 = x2;
        _this._y2 = y2;
        _this._x3 = x3;
        _this._y3 = y3;
        _this._color = color;
        _this._centerOfRotation = [(x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3];
        return _this;
    }
    Triangle.prototype.drawwMe = function () {
        var ctx = this._canvas.context;
        ctx.save();
        ctx.beginPath();
        ctx.translate(this._centerOfRotation[0], this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        eval("ctx." + this._fillStyle + "Style = \"" + this._color + "\"");
        ctx.moveTo(this.x - this._centerOfRotation[0], this.y - this._centerOfRotation[1]);
        ctx.lineTo(this._x2 - this._centerOfRotation[0], this._y2 - this._centerOfRotation[1]);
        ctx.lineTo(this._x3 - this._centerOfRotation[0], this._y3 - this._centerOfRotation[1]);
        ctx.lineTo(this.x - this._centerOfRotation[0], this.y - this._centerOfRotation[1]);
        eval("ctx." + this._fillStyle + "()");
        ctx.restore();
    };
    Triangle.prototype.updateMe = function () { };
    Object.defineProperty(Triangle.prototype, "centerOfRotation", {
        get: function () {
            return this._centerOfRotation;
        },
        set: function (coordinates) {
            this._centerOfRotation = [
                coordinates[0] + Math.min(this.x, this._x2, this._x3),
                coordinates[1] + Math.min(this.y, this._y2, this._y3)
            ];
        },
        enumerable: true,
        configurable: true
    });
    return Triangle;
}(Shape));
export default Triangle;

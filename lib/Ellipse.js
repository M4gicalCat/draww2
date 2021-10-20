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
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(x, y, width, height, color, canvas, startAngle, endAngle) {
        var _this = _super.call(this, x, y, canvas) || this;
        _this._color = color;
        _this._width = width;
        _this._height = height;
        _this._startAngle = startAngle ? startAngle : 0;
        _this._endAngle = endAngle ? endAngle : Math.PI * 2;
        _this._centerOfRotation = [width / 2, height / 2];
        return _this;
    }
    Ellipse.prototype.drawwMe = function () {
        var ctx = this._canvas.context;
        ctx.beginPath();
        eval("ctx." + this._fillStyle + "Style = \"" + this._color + "\"");
        ctx.ellipse(this.x, this.y, this._width, this._height, this._rotate * Math.PI / 180, this._startAngle, this._endAngle);
        eval("ctx." + this._fillStyle + "()");
    };
    Ellipse.prototype.updateMe = function () {
    };
    Object.defineProperty(Ellipse.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "startAngle", {
        get: function () {
            return this._startAngle;
        },
        set: function (value) {
            this._startAngle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "endAngle", {
        get: function () {
            return this._endAngle;
        },
        set: function (value) {
            this._endAngle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "centerOfRotation", {
        get: function () {
            return this._centerOfRotation;
        },
        set: function (coordinates) {
            this._centerOfRotation = coordinates;
        },
        enumerable: true,
        configurable: true
    });
    return Ellipse;
}(Shape));
export default Ellipse;

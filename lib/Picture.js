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
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(x, y, link, width, height, canvas) {
        var _this = _super.call(this, x, y, canvas) || this;
        _this._link = link;
        _this._width = width;
        _this._height = height;
        _this._centerOfRotation = [x, y];
        (_this._tagImage = document.createElement("img")).src = _this._link;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "centerOfRotation", {
        set: function (coordinates) {
        },
        enumerable: true,
        configurable: true
    });
    Picture.prototype.drawwMe = function () {
        var ctx = this.canvas.context;
        ctx.save();
        ctx.translate(this.x + this._centerOfRotation[0], this.y + this._centerOfRotation[1]);
        if (this._rotate !== 0)
            ctx.rotate(this._rotate * Math.PI / 180);
        ctx.drawImage(this._tagImage, -this._centerOfRotation[0], -this._centerOfRotation[1], this._width, this._height);
        ctx.restore();
    };
    Picture.prototype.updateMe = function () {
    };
    return Picture;
}(Shape));
export default Picture;

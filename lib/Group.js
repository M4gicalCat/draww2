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
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    /**
     * Creates a Group of Shapes, so that it becomes easier to move them if they need to be part of the same object
     * @param x
     * @param y
     * @param canvas
     */
    function Group(x, y, canvas) {
        var _this = _super.call(this, x, y, canvas) || this;
        _this._centerOfRotation = [x, y];
        _this._width = 0;
        _this._height = 0;
        _this._shapes = [];
        _this.differentielX = 0;
        _this.differentielY = 0;
        return _this;
    }
    /**
     * Adds a specific Shape to the Group (removes it from the Canvas)
     * @param s
     */
    Group.prototype.appendShape = function (s) {
        this.canvas.removeShape(s);
        this._shapes.push(s);
    };
    /**
     * Adds all Shapes to the Group (calls `appendShape()`)
     * @param s
     */
    Group.prototype.appendShapes = function (s) {
        for (var i = 0; i < s.length; i++) {
            this.appendShape(s[i]);
        }
    };
    /**
     * Removes the Shape from the Group and puts it back in the Canvas.
     * @param s
     */
    Group.prototype.removeShape = function (s) {
        for (var i = 0; i < this._shapes.length; i++) {
            if (this._shapes[i] === s) {
                this._shapes.splice(i, 1);
                this.canvas.appendShape(s);
                return true;
            }
        }
        return false;
    };
    /**
     * Removes all Shapes from the Group and put them back in the Canvas (calls `removeShape()`)
     * @param s
     */
    Group.prototype.removeShapes = function (s) {
        var result = [];
        for (var i = 0; i < s.length; i++) {
            if (this.removeShape(s[i]))
                result.push(s[i]);
        }
        return result;
    };
    Object.defineProperty(Group.prototype, "centerOfRotation", {
        set: function (coordinates) {
            this.differentielX = coordinates[0];
            this.differentielY = coordinates[1];
            this._centerOfRotation = [this.x + coordinates[0], this.y + coordinates[1]];
        },
        enumerable: true,
        configurable: true
    });
    Group.prototype.drawwMe = function () {
        var ctx = this._canvas.context;
        ctx.save();
        ctx.translate(this._centerOfRotation[0], this._centerOfRotation[1]);
        if (this._rotate !== 0) {
            ctx.rotate(this._rotate * Math.PI / 180);
        }
        for (var i = 0; i < this._shapes.length; i++) {
            this._shapes[i].updateMe();
            this._shapes[i].x -= this.differentielX;
            this._shapes[i].y -= this.differentielY;
            if (this._shapes[i].visible)
                this._shapes[i].drawwMe();
            this._shapes[i].x += this.differentielX;
            this._shapes[i].y += this.differentielY;
        }
        ctx.restore();
    };
    Group.prototype.updateMe = function () {
    };
    Object.defineProperty(Group.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    return Group;
}(Shape));
export default Group;

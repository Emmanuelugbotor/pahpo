"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.route = function (app) {
        app.route('/').get(function (req, res) { return res.status(200).send({ name: 'Emmanuel', otherName: "Ugbotor" }); });
    };
    return Routes;
}());
exports.Routes = Routes;

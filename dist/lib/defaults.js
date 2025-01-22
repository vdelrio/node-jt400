"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
function defaults(options, defaults) {
    options = options || {};
    Object.keys(defaults).forEach((key) => {
        if (typeof options[key] === 'undefined') {
            options[key] = defaults[key];
        }
    });
    return options;
}
exports.defaults = defaults;
//# sourceMappingURL=defaults.js.map
"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue = new vue_1["default"]({
    el: "#app",
    template: "\n    <div>\n        <div>Hello {{name}}!</div>\n        Name: <input v-model=\"name\" type=\"text\">\n    </div>",
    data: {
        name: "World"
    }
});
exports.vue = vue;

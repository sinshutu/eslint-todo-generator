"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const optionator_1 = __importDefault(require("optionator"));
exports.default = optionator_1.default({
    prepend: 'usage: eslint-todo-generator [file.js] [dir]',
    options: [{
            heading: 'Options',
        },
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'Show help',
        },
        {
            option: 'version',
            alias: 'v',
            type: 'Boolean',
            description: 'Outputs the version number',
        }, {
            option: 'format',
            alias: 'f',
            type: 'String',
            description: '',
        }],
});

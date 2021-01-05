"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTodo = exports.main = void 0;
const eslint_1 = require("eslint");
const fs_1 = __importDefault(require("fs"));
const LintResultTransformer_1 = __importDefault(require("./LintResultTransformer"));
const Renderer_1 = require("./Renderer");
function writeTodoFile(format, overrides) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputPath = `.eslintrc-todo.${format === 'json' ? 'json' : 'yml'}`;
        yield fs_1.default.writeFileSync(outputPath, format === 'json' ? Renderer_1.renderAsJSON({ overrides }) : Renderer_1.renderAsYAML({ overrides }), { encoding: 'utf8' });
    });
}
function main(files, format, level) {
    return __awaiter(this, void 0, void 0, function* () {
        const eslint = new eslint_1.ESLint({});
        const results = yield eslint.lintFiles(files);
        const transformer = new LintResultTransformer_1.default(results);
        const todoRules = transformer.generateTodo(level);
        yield writeTodoFile(format, todoRules);
    });
}
exports.main = main;
function resetTodo(format) {
    return __awaiter(this, void 0, void 0, function* () {
        yield writeTodoFile(format, []);
    });
}
exports.resetTodo = resetTodo;

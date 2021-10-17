"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniq_1 = __importDefault(require("lodash/uniq"));
const map_1 = __importDefault(require("lodash/map"));
const fromPairs_1 = __importDefault(require("lodash/fromPairs"));
const path_1 = require("path");
class LintResultTransformer {
    constructor(results) {
        this.originalResults = results;
    }
    generateTodo(warningLevel = 'off') {
        return (0, map_1.default)(this.toGroupByFile, (ruleAggregate) => {
            const files = [(0, path_1.relative)(process.cwd(), ruleAggregate.filePath)];
            const rules = (0, fromPairs_1.default)(ruleAggregate.rules.map((rule) => [rule, warningLevel]));
            return {
                rules,
                files,
            };
        });
    }
    get stripEmptyFiles() {
        return this.originalResults.filter((lintResult) => lintResult.messages.length > 0);
    }
    get toGroupByFile() {
        return this.stripEmptyFiles.map((result) => ({
            filePath: result.filePath,
            rules: (0, uniq_1.default)(result.messages.map((msg) => msg.ruleId)),
        }));
    }
}
exports.default = LintResultTransformer;

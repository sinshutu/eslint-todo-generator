"use strict";
// import * as YAML from "yamljs";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAsJSON = exports.renderAsYAML = void 0;
function generateYAMLCommentBlock() {
    return `# This configuration was generated by eslint-todo-generator
#
# on ${new Date().toISOString()}.
# generator version: {TODO};
# eslint version: {TODO};
#
# It contains all the known ESLint errors/warnings, and prevents them from
# showing up as errors until devs can remove them from the code base.
# Remove specific errors or entire file entries as you fix the offences.
`;
}
function renderAsYAML(object) {
    const renderConfiguration = ''; // YAML.stringify(object, 10, 2);
    return `${generateYAMLCommentBlock()}${renderConfiguration}`;
}
exports.renderAsYAML = renderAsYAML;
function renderAsJSON(object) {
    return `${JSON.stringify(object)}`;
}
exports.renderAsJSON = renderAsJSON;
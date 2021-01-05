import { ESLint, Linter } from 'eslint';
import { TodoOutput } from './models';
export default class LintResultTransformer {
    originalResults: ESLint.LintResult[];
    constructor(results: ESLint.LintResult[]);
    generateTodo(warningLevel?: Linter.RuleLevel): TodoOutput[];
    private get stripEmptyFiles();
    private get toGroupByFile();
}

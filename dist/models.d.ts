import { Linter } from 'eslint';
export declare type LintResultOfFile = {
    filePath: string;
    rules: (string | null)[];
};
export declare type TodoOutput = {
    rules: {
        [index: string]: Linter.RuleLevel;
    };
    files: string[];
};

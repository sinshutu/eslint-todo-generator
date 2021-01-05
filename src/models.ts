import { Linter } from 'eslint';

export type LintResultOfFile = {
  filePath: string;
  rules: (string|null)[];
}

export type TodoOutput = {
  rules: { [index: string]: Linter.RuleLevel };
  files: string[];
}

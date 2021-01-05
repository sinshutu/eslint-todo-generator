import { ESLint, Linter } from 'eslint';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import fromPairs from 'lodash/fromPairs';
import { relative } from 'path';
import { Dictionary } from 'lodash';
import { LintResultOfFile, TodoOutput } from './models';

export default class LintResultTransformer {
  originalResults: ESLint.LintResult[];

  constructor(results: ESLint.LintResult[]) {
    this.originalResults = results;
  }

  generateTodo(warningLevel: Linter.RuleLevel = 'off'): TodoOutput[] {
    return map(this.toGroupByFile, (ruleAggregate: LintResultOfFile): TodoOutput => {
      const files = [relative(process.cwd(), ruleAggregate.filePath)];
      const rules: Dictionary<Linter.RuleLevel> = fromPairs(
        ruleAggregate.rules.map((rule) => [rule, warningLevel]),
      );
      return {
        rules,
        files,
      };
    });
  }

  private get stripEmptyFiles(): ESLint.LintResult[] {
    return this.originalResults.filter((lintResult) => lintResult.messages.length > 0);
  }

  private get toGroupByFile(): LintResultOfFile[] {
    return this.stripEmptyFiles.map((result) => ({
      filePath: result.filePath,
      rules: uniq(result.messages.map((msg) => msg.ruleId)),
    }));
  }
}

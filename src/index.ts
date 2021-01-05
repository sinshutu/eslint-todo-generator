import { ESLint, Linter } from 'eslint';
import fs from 'fs';
import LintResultTransformer from './LintResultTransformer';
import { renderAsJSON, renderAsYAML } from './Renderer';
import { TodoOutput } from './models';

async function writeTodoFile(format: string, overrides: TodoOutput[]): Promise<void> {
  const outputPath = `.eslintrc-todo.${format === 'json' ? 'json' : 'yml'}`;
  await fs.writeFileSync(
    outputPath,
    format === 'json' ? renderAsJSON({ overrides }) : renderAsYAML({ overrides }),
    { encoding: 'utf8' },
  );
}

export async function main(
  files: string[],
  format: string,
  level: Linter.RuleLevel,
): Promise<void> {
  const eslint = new ESLint({});
  const results = await eslint.lintFiles(files);
  const transformer = new LintResultTransformer(results);
  const todoRules = transformer.generateTodo(level);

  await writeTodoFile(format, todoRules);
}

export async function resetTodo(format: string): Promise<void> {
  await writeTodoFile(format, []);
}

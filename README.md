eslint-todo-generator
====

Generates an exception list and adds it to your eslintrc.

## Install
```
$ npm i --save-dev eslint-todo-generator
```

## Usage
Run command in the project path.

```
$ eslint-todo-generator -f json 'src/**/*'
```

You need to add the generated `.eslintrc-todo.(json|yaml)` to the extends of eslintrc.

```
{
  ...
  "extends": [
    "eslint:recommended",
    ".eslintrc-todo.json"
  ]
}
```

## Options

| Options     | Description                                                |
| ----------- | ---------------------------------------------------------- |
| -w --warn   | Create a to-do list with rules set to warn instead of off. |
| -f --format | format setting, json or yaml.                              |


## Note
If project have specific eslint rules, you need to change a existing setting.
The reason is `.eslintrc-todo` need to be loaded last.

```
{
  ...
  "extends": [
    "eslint:recommended",
    ".eslintrc-project-custom-rules.json",
    ".eslintrc-todo.json"
  ]
}
```

## Licence

[MIT](https://github.com/sinshutu/eslint-todo-generator/blob/master/LICENSE)

## Author

[sinshutukibotu](https://github.com/sinshutu)

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  parserOptions: {
    //project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    parser: 'babel-eslint'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'promise',
    'fp',
    'security'
  ],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:promise/recommended',
    'plugin:fp/recommended',
    'plugin:security/recommended'
  ],
  // ignorePatterns: ['/src/config/db/**/*.js'],
  rules: {
    // Disable errors occurring on old code (before add ts to project)
    // TODO: set return type on all functions, set this rule to true (explicit-function-return-type) (then the override can be removed too)
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    //
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'trailing-comma': [true, { multiline: 'always', singleline: 'never' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ],
    'no-console': 'warn',
    'no-var': 'error',
    'fp/no-nil': 'off',
    'fp/no-let': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-throw': 'off',
    'fp/no-this': 'off',
    'fp/no-class': 'off',
    'fp/no-loops': 'off',
    'promise/always-return': 'warn',
    'fp/no-mutation': ['warn', { commonjs: true }]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-explicit-any': ['off']
      }
    },
    {
      // enable the rule specifically for Javascript files
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      // enable the rule specifically for test and stub files
      files: ['*.stub.js', '*.spec.js'],
      rules: {
        'promise/always-return': 'off',
        'fp/no-rest-parameters': 'off',
        'fp/no-mutation': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off'
      }
    },
    {
      // enable the rule specifically for db migrations files
      files: ['src/config/db/**/*.js'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vue', 'sort-imports-es6-autofix'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'off', // disallow variable declarations from shadowing variables declared in the outer scope
    'no-duplicate-imports': ['error', { includeExports: true }], // disallow duplicate module imports
    'no-template-curly-in-string': 'error', // disallow template literal placeholder syntax in regular strings
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
    curly: ['error', 'all'], // enforce consistent brace styles for all control statements
    eqeqeq: ['error', 'smart'],
    'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
    'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
    'no-else-return': ['error', { allowElseIf: false }], // disallow else blocks after return statements in if statements
    'no-implicit-coercion': 'error', // disallow shorthand type conversions
    'no-labels': 'error', // disallow labeled statements
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks
    'no-multi-spaces': 'error', // disallow multiple spaces
    'no-new': 'error', // disallow new operators outside of assignments or comparisons
    'no-new-func': 'error', // disallow new operators with the Function object
    'no-new-wrappers': 'error', // disallow new operators with the String, Number, and Boolean objects
    'no-return-await': 'error', // disallow unnecessary return await
    'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
    'no-sequences': 'error', // disallow comma operators
    'no-throw-literal': 'off', // disallow throwing literals as exceptions
    'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply()
    'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
    'no-useless-return': 'error', // disallow redundant return statements
    'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
    radix: 'error', // enforce the consistent use of the radix argument when using parseInt()
    'no-undefined': 'off', // disallow the use of undefined as an identifier
    'array-bracket-newline': 'off', // enforce linebreaks after opening and before closing array brackets
    'comma-dangle': ['error', 'always-multiline'], // require or disallow trailing commas
    'comma-style': 'error', // enforce consistent comma styles
    'eol-last': 'error', // require or disallow newline at the end of files
    'key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 'error', // enforce consistent spacing before and after keywords
    'new-parens': 'error', // enforce or disallow parentheses when invoking a constructor with no arguments
    'no-bitwise': 'warn', // disallow bitwise operators
    'no-lonely-if': 'warn', // disallow if statements as the only statement in else blocks
    'no-multiple-empty-lines': ['error', { max: 1 }], // disallow multiple empty lines
    'no-nested-ternary': 'error', // disallow nested ternary expressions
    'no-new-object': 'error', // disallow Object constructors
    'no-empty-function': 'off',
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
    'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 'error', // disallow whitespace before properties
    'object-curly-newline': 'error', // enforce consistent line breaks inside braces
    'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
    'semi-spacing': 'error', // enforce consistent spacing before and after semicolons
    'space-before-blocks': 'error', // enforce consistent spacing before blocks
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ], // enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': 'error', // enforce consistent spacing inside parentheses
    'space-infix-ops': 'error', // require spacing around infix operators
    'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators
    'spaced-comment': ['error', 'always'], // enforce consistent spacing after the // or /* in a comment
    'switch-colon-spacing': 'error', // enforce spacing around colons of switch statements
    'arrow-body-style': ['error', 'as-needed'], // require braces around arrow function bodies
    'arrow-parens': ['error', 'as-needed'], // require parentheses around arrow function arguments
    'arrow-spacing': 'error', // enforce consistent spacing before and after the arrow in arrow functions
    'generator-star-spacing': ['error', 'after'], // enforce consistent spacing around * operators in generator functions
    'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
    'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
    'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
    'object-shorthand': ['error', 'always'], // require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
    'prefer-destructuring': 'off', // require destructuring from arrays and/or objects
    'rest-spread-spacing': ['error', 'never'], // enforce spacing between rest and spread operators and their expressions
    'sort-imports': 'off', // enforce sorted import declarations within modules
    'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings
    'promise/prefer-await-to-then': 'off', // refer await to then() for reading Promise values,
    'optimize-regex/optimize-regex': 'off', // Optimize regex literals
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'if', next: 'if' },
      { blankLine: 'always', prev: ['default'], next: '*' },
    ],
    semi: [2, 'never'],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['warn', { semi: false }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
}

/**
 * Molecule Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const getComponentPaths = require('../utils/componentPaths')

const getPaths = getComponentPaths('molecules');

module.exports = {
  description: 'Add a molecule',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate files
    const actions = [
      getPaths('index.js'),
      getPaths('index.stories.js'),
      getPaths('tests/index.test.js'),
    ];

    // If the user wants i18n messages
    if (data.wantMessages) {
      actions.push(getPaths('messages.js'));
    }

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push(getPaths('loadable.js'));
    }

    actions.push({
      type: 'prettify',
      path: '/components/molecules/',
    });

    return actions;
  },
};

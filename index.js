/* jshint node: true */
'use strict';

function calculateAppConfig(config) {
  return JSON.stringify(config.APP || {});
}

module.exports = {
  name: 'ember-cli-delay-app-boot',
  
  initializeOptions: function() {
    var defaultOptions = {
      delay: 250,
      environments: ['development']
    };

    this.options = this.app.options['delay-app-boot'] || {};

    for (var option in defaultOptions) {
      if (!this.options.hasOwnProperty(option)) {
        this.options[option] = defaultOptions[option];
      }
    }
    
    if (this.options.environments.indexOf(this.app.env) !== -1) {
      this.app.options.autoRun = false;
    }
  },
  
  contentFor: function(type, config) {
    if (type === 'app-boot' && this.options.environments.indexOf(this.app.env) !== -1) {
      return 'setTimeout(function() {\n' +
               'require("' + config.modulePrefix + '/app")["default"]' +
                 '.create(' + calculateAppConfig(config) + ');\n' +
              '}, ' + this.options.delay + ');';
    }
  },

  included: function() {
    this.initializeOptions();
  }
};

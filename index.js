/* jshint node: true */
'use strict';

function calculateAppConfig(config) {
  return JSON.stringify(config.APP || {});
}

module.exports = {
  name: 'ember-cli-delay-app-boot',

  contentFor: function(type, config) {
    if (type === 'app-boot' && this.app.env !== 'production') {
      return 'setTimeout(function() {\n' +
               'require("' + config.modulePrefix + '/app")["default"]' +
                 '.create(' + calculateAppConfig(config) + ');\n' +
              '}, 250);';
    }
  },

  included: function() {
    this.app.options.autoRun = false;
  }
};

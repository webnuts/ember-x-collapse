/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-x-collapse',
  included: function(app) {
    this._super.included(app);
    
    app.import(app.bowerDirectory + '/bootstrap/js/transition.js');
    app.import(app.bowerDirectory + '/bootstrap/js/collapse.js');
  }
};

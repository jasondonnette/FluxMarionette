/*var FluxMarionette = FluxMarionette || {}; //global namespace 

define(function (require) {
	//deps
	require('backbone.marionette');

	

});*/

(function(root, factory) {

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['backbone.marionette'], function(Marionette) {
      return (root.FluxMarionette = factory(root, Marionette));
    });
  } else if (typeof exports !== 'undefined') {
    var Marionette = require('backbone.marionette');
    module.exports = factory(root, Marionette);
  } else {
    root.FluxMarionette = factory(root, root.Marionette);
  }

}(this, function(root, Marionette) {
	var FluxMarionette = {};

	//load our flux classes
	//require('classes/application');
	//require('classes/modelStore');
	//require('classes/views');
	//require('classes/router');
	require(['classes/apiController'], function (apiController) {
	    FluxMarionette.ApiController = apiController;
	});

	//var apiController = require('classes/apiController');
	

	return FluxMarionette;
}));
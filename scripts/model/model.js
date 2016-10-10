'use strict';

(function(module) {
  var uberInfo = {};

  uberInfo.allDrivers = [];

  uberInfo.getOauth = function() {
    var tempString = '?latitude=45.5231&longitude=-122.6765';
    var ajaxQuery = {
      //url: 'http://localhost:3000/uber/',
      url: 'https://api.uber.com/v1/products?latitude=45.5231&longitude=-122.6765',
      type: 'GET',
      headers: {
        Authorization: 'Token '
      },
      success: function(data) {
        console.log(data);
      },
      error : function(data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
        console.log('What happened?');
      }
    };
    $.ajax(ajaxQuery);
  };

  module.uberInfo = uberInfo;
  uberInfo.getOauth();
})(window);

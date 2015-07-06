
var temp_app = (function () {
  var app = {};

  app.checkSupport = function () {
    return (window.File && window.FileReader);
  };

  app.reset = function () {
    localStorage.clear();
    location.reload();
  };

  return app;
})();

load = function () {
  app = temp_app;
  document.querySelector('.appstatus').innerHTML = app.checkSupport() ? 'Loaded' : 'Your browser does not support the required HTML5 APIs, try an updated version of Chrome or Firefox';
};

window.addEventListener('load', load);

(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();

    // DONE: Call the function that loads (or 'requests') our repo data.
    //  Pass in some view function as a higher order callback, so our repos
    //  will render after the data is loaded.
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    /* DONE: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/sungkim3/repos' +
            '?sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + gitHubToken},
      success: function(data) {
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);

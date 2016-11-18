(function() {
  'use strict';

  window.git = window.git || {};
  window.git.searchRepos = searchRepos;
  /**
   * It is supposed to be able to search the github api
   *
   * @return {[type]} [description]
   */
  function searchRepos(api, query) {
    return $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + query,
      method: 'GET',
      dataType: 'json',
      headers: {
        Authorization: 'token ' + api
      }
    })
    .then(function handleSuccess(data) {
      var repos = data.items;
      var randomRepo = repos[Math.floor(Math.random()*repos.length)];
      console.log(randomRepo);

    });

  }



}());

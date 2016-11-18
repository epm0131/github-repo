(function() {
  'use strict';

  window.git = window.git || {};
  window.git.searchRepos = searchRepos;
  window.git.searchCommits = searchCommits;
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
    });
  }

  function  searchCommits(api, url) {
    return $.ajax({
      url: url.split("{")[0],
      method: 'GET',
      dataType: 'json',
      headers: {
        Authorization: 'token ' + api
      }
    });
  }


}());

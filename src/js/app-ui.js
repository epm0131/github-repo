(function() {
  'use strict';

  window.git = window.git || {};

    $('#search')
      .on('submit', function findRepos(event){
        event.preventDefault();
        var api = $("#api-key").val();
        console.log(api);
        var query = $("#query").val();
        console.log(query);
        window.git.searchRepos(api, query);
      });
}());

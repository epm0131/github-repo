(function() {
  'use strict';

  window.git = window.git || {};

    $('#search')
      .on('submit', function findRepos(event){
        event.preventDefault();

        var api = $("#api-key").val();
        var query = $("#query").val();

        window.git.searchRepos(api, query)

        .then(function handleSuccess(data) {

          var repos = data.items;
          var randomRepo = repos[Math.floor(Math.random()*repos.length)];
          console.log(randomRepo);
          var url = randomRepo.commits_url;
          console.log(url);
          var p = window.git.searchCommits(api, url);
          return p;

        })
        .then(function handleSuccess(data) {
          console.log('This is the second one', data);
          var author = data[0].commit.author.name;
          console.log(author);
          var avatar = data[0].author.avatar_url;
          console.log(avatar);  
        });


      });
}());

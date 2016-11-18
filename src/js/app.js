(function() {
  'use strict';

  window.git = window.git || {};
  /**
   * It is supposed to be able to search the github api
   *
   * @return {[type]} [description]
   */
  function searchQuery(Promise) {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=...',
      method: 'GET',
      dataType: 'json',
      headers: {
        Authorization: 'token'
      }
    });
  }



}());

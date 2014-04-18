/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */
"use strict";
$(document).ready(function() {
  $('dl').toggle();
  $('h2').bind('click', function(event) {
    event.preventDefault();
    $(this).next('dl').slideToggle(500, function() {
      $('.video-background').videobackground('resize');
    });
  });
  $('body').prepend('<div class="video-background"></div>');
  $('.video-background').videobackground({
    videoSource: [['http://pdl.vimeocdn.com/80656/412/243223127.mp4?token2=1397829377_42e53a5c07b07537e16fbfcdfe2237fd&aksessionid=7a20cddd46088ff4', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });
});

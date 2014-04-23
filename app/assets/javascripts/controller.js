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
    videoSource: [['http://pdl.vimeocdn.com/94264/560/243223128.mp4?token2=1398275179_099d221e68238d75041ef26d79d00d0b&aksessionid=02c2ead7d2723456', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });

});



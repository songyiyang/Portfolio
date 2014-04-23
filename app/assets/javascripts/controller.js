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
    videoSource: [['http://pdl.vimeocdn.com/94264/560/243223128.mp4?token2=1398289207_739e413a2a6fa31218090554e475c2b3&aksessionid=a17add0f6092efd5', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });

});



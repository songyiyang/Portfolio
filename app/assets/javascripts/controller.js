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
    videoSource: [['http://pdl.vimeocdn.com/75973/468/221428380.mp4?token2=1397143662_1c2a73fa56ff786f7bd118a8899cc715&aksessionid=92b48f2fed241b4a', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });
});

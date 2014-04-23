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
    videoSource: [['http://pdl.vimeocdn.com/94264/560/243223128.mp4?token2=1398291499_7ce3d2d808c1f90bf36774c54e59f679&aksessionid=1c8467a2d3f29535', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });

});



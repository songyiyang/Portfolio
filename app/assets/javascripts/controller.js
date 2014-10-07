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
    videoSource: [['https://s3-us-west-2.amazonaws.com/yiyang/backvideo-HD.mp4', 'video/mp4']],
    controlPosition: '#main',
    loadedCallback: function() {
      // $(this).videobackground('mute');
    }
  });
  $('#mute').click(function(){
    $('.video-background').videobackground('mute');
    if ($('#mute-img').attr('src') === "http://i.imgur.com/wkj7Pwq.png"){
      $('#mute-img').attr('src', $('#mute-img').attr('src').replace("http://i.imgur.com/wkj7Pwq.png", "http://i.imgur.com/qSmc7cK.png"));
    }else{
      $('#mute-img').attr('src', $('#mute-img').attr('src').replace("http://i.imgur.com/qSmc7cK.png", "http://i.imgur.com/wkj7Pwq.png"));
    }
  });

});


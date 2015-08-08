/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */
"use strict";

$(document).ready(function(){

	var videoBody = '<div class="video-background"></div>',
			videoSource = 'https://s3-us-west-2.amazonaws.com/yiyang/backvideo-HD.mp4',
			videoType = 'video/mp4',
			videoPos = '#main';

  $('body').prepend(videoBody);

  $('.video-background').videobackground({ videoSource: [[videoSource, videoType]], controlPosition: videoPos,
    loadedCallback: function() { muteToggle() }
  });

  $('#mute').on('click', function(){ muteToggle() });

	$("#yiyang").on('click', function(){
		if ($("#about-me").css('display') === 'none'){
			$("#left-p").children().css('display', 'none');
			$("#about-me").fadeIn("slow");
		}
	});

	$('.portlight-projects').on('click', function(){
		if ($("#about-portlight").css('display') === 'none'){
			$("#left-p").children().css('display', 'none');
			$("#about-portlight").fadeIn("slow");
		}
		$("#right-p").children().css('display', 'none');
		$($(this).data('id')).fadeIn("slow");
	});

	$('.remove').on('click', function(){
		$(this).parent().fadeOut('slow');
	});

});
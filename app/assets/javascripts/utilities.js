/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */
"use strict";

function muteToggle(){
	$('.video-background').videobackground('mute');
  if ($('#mute-img').data('on')){
    $('#mute-img')
    	.attr('src', "http://i.imgur.com/qSmc7cK.png")
    	.data('on', false);
  }else{
  	$('#mute-img')
    	.attr('src', "http://i.imgur.com/wkj7Pwq.png")
    	.data('on', true);
  }
}

function checkWindowSize(){
  var visible = $('#all-p').css('visibility'),
      width = $(window).width();
  if (width < 1100 && visible === 'visible'){
    $('#all-p').css('visibility', 'hidden');
    $('.nav-li').css('display', 'none');
  }else if (width > 1100 && visible === 'hidden'){
    $('#all-p').css('visibility', 'visible');
    $('.nav-li').css('display', 'block');
  }
}
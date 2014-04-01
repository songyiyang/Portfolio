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
    videoSource: [['http://pdl.vimeocdn.com/24613/325/200436457.mp4?token2=1395780263_f351e120729eb08a36f1a3f172988544&aksessionid=9f878c5c013782a8', 'video/mp4']],
    controlPosition: '#main',
    poster: 'video/big-buck-bunny.jpg',
    loadedCallback: function() {
      $(this).videobackground('mute');
    }
  });
});

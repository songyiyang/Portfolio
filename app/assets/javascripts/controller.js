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
          videoSource: [['http://www.openfootage.net/Openfootage/Vorschau/OpenfootageNET_BlueSunset_Salzburg_HD_PAL_openfootage_H264_Preview_Watermark.mp4', 'video/mp4'],
            ['video/big-buck-bunny.webm', 'video/webm'], 
            ['video/big-buck-bunny.ogv', 'video/ogg']], 
          controlPosition: '#main',
          poster: 'video/big-buck-bunny.jpg',
          loop: true,
          loadedCallback: function() {
            $(this).videobackground('mute');
          }
        });
      });

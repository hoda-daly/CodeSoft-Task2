$( function() {
    $( "#input__check--in" ).datepicker();
    $( "#input__check--out" ).datepicker();

    $('.level-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      // focusOnSelect: true
      arrows:false
    });
    function videoToggel(){
      video=$('.level-video').get(0)
      if(video.paused){
        video.play();
        $('.video-play').hide();
        $('.video-pause').show();
      }
      else{
        video.pause();
        $('.video-play').show();
        $('.video-pause').hide();
      }
    }

    $('.video-play').click(function(){
      videoToggel();
    })
    $('.video-pause').click(function(){
      videoToggel();
    })
  } );

 
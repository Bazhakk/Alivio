jQuery(document).ready(function ( $ ) {
  
  $(document).on('click', '#burger', function() {
    $('#burger').toggleClass('burger-active');
    $('#mobile-menu').slideToggle().css('display', 'flex');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('#burger').length) {
      $('#mobile-menu').hide();
      $('#burger').removeClass('burger-active');
    }
    e.stopPropagation();
  });


  //VIDEO
    const btnOk = document.querySelector('.btn-play');
    const btnStop = document.querySelector('.btn-stop');
    const wrapperVideo = document.getElementById('story-video');
    
    btnOk.addEventListener('click',function(){
      wrapperVideo.play();
    });
    
    btnStop.addEventListener('click',function(){
      wrapperVideo.pause();
    });


  // AOS init
  AOS.init({
    once: true
  });

});

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
  const btnPlay = document.getElementById('btn-play');
  // const btnStop = document.querySelector('.btn-stop');
  const storyVideo = document.getElementById('story-video');
  const storyImg = document.getElementById('story-img');
  
  btnPlay.addEventListener('click',function(){
    btnPlay.classList.toggle('story__play-active');
    storyImg.style.display = 'none';
    storyVideo.style.display = 'block';
    storyVideo.play();

    if(btnPlay.classList.contains('story__play-active')) {
      storyVideo.pause();
    }
  });
  
  // btnStop.addEventListener('click',function(){
  //   storyImg.style.display = 'none';
  //   storyVideo.style.display = 'block';
  //   storyVideo.pause();
  // });


  // AOS init
  AOS.init({
    once: true
  });

});

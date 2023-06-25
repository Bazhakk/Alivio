jQuery(document).ready(function ( $ ) {
  
  //Burger-menu
  let burger = document.getElementById('burger');
  let mobileMenu = document.getElementById('mobile-menu');
  
  burger.addEventListener('click', function() {
    if(burger.classList.contains('burger-active')) {
      mobileMenu.style.display = "none";
      burger.classList.remove('burger-active');

      $("body").css("overflow", "auto");

    } else {
      mobileMenu.style.display = "flex";
      burger.classList.add('burger-active');

      $("body").css("overflow","hidden");
    }
  });

  //VIDEO
  const btnPlay = document.getElementById('btn-play');
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

  // AOS init
  AOS.init({
    once: true
  });
});

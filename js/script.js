$(document).ready(function() {

  $('#burger-nav').on('click',function(){
    $(this).toggleClass("change");
    $("#menu-mobile").toggleClass("menu-muncul");
  });

  $(window).scroll(function() {

    const wScroll = $(this).scrollTop();

    showAnimate(".intro-box", "intro-show", 700);
    showAnimate(".service-box", "service-show", 700);
    showAnimate(".news-box", "news-show", 700);
    showAnimate(".alumni-box", "alumni-show", 700);
    showAnimate(".teacher-box", "teacher-show", 700);

    function showAnimate(target, name, offset)
    {
      $(target).each(function(i){
        if (wScroll > $(target).eq(i).offset().top - offset) {
            setTimeout(function(){
               $(target).eq(i).addClass(name);
            },300 * (i+1));
        };
      });
    }

  }); //end scroll

}); //end ready
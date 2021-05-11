window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 80) {
        $("nav").animate({opacity: '100%'},"slow");
        $("nav").css("background-color", "#fff");
        $(".nav-text").css("opacity", "100%");
        $(".nav-text").css("color", "black");
    } else {
        $("nav").css("background-color", "transparent");
        $("nav").css("opacity", "50%");
        $(".nav-text").css("opacity", "30%");
        $(".nav-text").css('color', '#fff');
        
    }
  }
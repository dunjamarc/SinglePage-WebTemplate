var main = function() {
    
    //Hamburger
	$('.icon').on('click', function(){
		$('.nav').toggleClass('responsive');
	});

    //Smooth srcolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });
    
    //Modernizr-overlay
	if (Modernizr.touch) {
        $(".close-overlay").removeClass("hidden");
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    };
    
    //Fancybox
	$('.fancybox').fancybox({
		helpers : { 
          overlay: {
            css: {'background-color': 'rgba(0, 0, 0, 0.5)'}
          }  
        }
	});
    
    //Flexslider
    $('.flexslider').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
    });
};

$(document).ready(main);
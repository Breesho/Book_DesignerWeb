 $(document).ready(function() {

           
                function scroll_to_top(div) {
                    $(div).click(function() {
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                    });
                    $(window).scroll(function() {
                        if ($(window).scrollTop() < 500) {
                            $(div).fadeOut();
                        } else {
                            $(div).fadeIn();
                        }
                    });
                }
                scroll_to_top("#scroll_to_top");
            });

            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 100) {
                    $('nav').addClass('black');
                } else {
                    $('nav').removeClass('black');
                }
                return false;
            });

            $('.js-scrollTo').on('click', function() {
                var page = $(this).attr('href');
                var speed = 800;
                $('html, body').animate({
                    scrollTop: $(page).offset().top
                }, speed);


            });

            $(".burger").click(function(){
                $("nav.menuresponsive").toggleClass("is-open");
                return false;
            });
            $(".burger").click(function(){
                $( this ).toggleClass("burger-open");
                return false;
            });
            $("nav.menuresponsive ul li a").click(function(){
                $("nav.menuresponsive").removeClass("is-open");
                $(".burger").removeClass("burger-open");
                return false;
            });
//		     
           
       
	
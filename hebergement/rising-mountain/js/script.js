 $(document).ready(function () {

     function scroll_to_top(div) {
         $(div).click(function () {
             $('html,body').animate({
                 scrollTop: 0
             }, 1000);
         });
         $(window).scroll(function () {
             if ($(window).scrollTop() < 500) {
                 $(div).fadeOut();
             } else {
                 $(div).fadeIn();
             }
         });
     }
     scroll_to_top("#scroll_to_top");
 });

 $(document).ready(function () {


$(" div.boutonmenuresp").click(function check() {
     
     $("div.navresponsive div.conteneurmenu").toggleClass("menuactive");  
    $("div.navresponsive div.boutonmenuresp figure").toggleClass("figureactive");   
    $("div.navresponsive").toggleClass("navresponsiveactive");   
     return false;

});
     });
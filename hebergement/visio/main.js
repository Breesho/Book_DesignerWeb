$(document).ready(function() {

    
     $("a.Homme").click(function(){
        $( "div.hommedev" ).slideToggle(500);
        $( "div.femmedev" ).slideUp(1000);
        $( "div.enfantdev" ).slideUp(1000);
        $( "div.lentilledev" ).slideUp(1000);
        return false;
        }); 
    
    
     $("a.Femme").click(function(){
        $( "div.femmedev" ).slideToggle(500);
        $( "div.hommedev" ).slideUp(1000);
        $( "div.enfantdev" ).slideUp(1000);
        $( "div.lentilledev" ).slideUp(1000);
        return false;
        });
    
    
    $("a.Enfant").click(function(){
        $( "div.enfantdev" ).slideToggle(500);
        $( "div.hommedev" ).slideUp(1000);
        $( "div.femmedev" ).slideUp(1000);
        $( "div.lentilledev" ).slideUp(1000);
        return false;
        }); 
    
    $("a.Lentille").click(function(){
        $( "div.lentilledev" ).slideToggle(500);
        $( "div.hommedev" ).slideUp(1000);
        $( "div.femmedev" ).slideUp(1000);
        $( "div.enfantdev" ).slideUp(1000);
        return false;
        }); 
    
     $(".rslides").responsiveSlides({
              auto: true,             // Boolean: Animate automatically, true or false
              speed: 500,            // Integer: Speed of the transition, in milliseconds
              timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
              pager: false,           // Boolean: Show pager, true or false
              nav: true,             // Boolean: Show navigation, true or false
              random: false,          // Boolean: Randomize the order of the slides, true or false
              pause: false,           // Boolean: Pause on hover, true or false
              pauseControls: true,    // Boolean: Pause when hovering controls, true or false
              prevText: "<",   // String: Text for the "previous" button
              nextText: ">",       // String: Text for the "next" button
              maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
              navContainer: "",       // Selector: Where controls should be appended to, default is after the 
              manualControls: "",     // Selector: Declare custom pager navigation
              namespace: "rslides",   // String: Change the default namespace used
              before: function(){},   // Function: Before callback
              after: function(){}     // Function: After callback
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
                
        });
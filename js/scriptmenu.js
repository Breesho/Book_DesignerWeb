
$(".boutondep").click(function check() {
     
            $(".menu").toggleClass("menuactive");   
            $("div.boutondep span").toggleClass("spanactive");
            $("div.boutondep h3").toggleClass("h3active");
            $("body").toggleClass("bodyactive");
            
            return false;

});

$("#boutonsociaux").click(function() {
            $("#sociaux").toggleClass("sociauxactive");
            return false;

});



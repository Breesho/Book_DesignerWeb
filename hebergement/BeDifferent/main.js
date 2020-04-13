$(document).ready(function() {

    
     $("a.hommes").click(function(){
        $( "div.hommes" ).slideToggle(1000);
        $( "div.femmes" ).slideUp(200);
        $( "div.enfants" ).slideUp(200);
         
        return false;
        }); 
    
    
     $("a.femmes").click(function(){
        $( "div.femmes" ).slideToggle(1000);
        $( "div.hommes" ).slideUp(200);
        $( "div.enfants" ).slideUp(200);
         
        return false;
        });
    
    
    $("a.enfants").click(function(){
        $( "div.enfants" ).slideToggle(1000);
        $( "div.hommes" ).slideUp(300);
        $( "div.femmes" ).slideUp(200);
         
        return false;
        }); 
    
    
    
    }); 
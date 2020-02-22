
$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 2700){
    $(".artwork").attr("src", "./image/wrapper-3.png");
   } 
   else if (value > 2400){
    $(".artwork").attr("src", "./image/wrapper-2.png");
   } 
   else if (value > 2100){
    $(".artwork").attr("src", "./image/wrapper-1.png");
   } 
   else if (value > 1800){
    $(".artwork").attr("src", "./image/Artwork-7.png");
   } 
   else if (value > 1500){
    $(".artwork").attr("src", "./image/Artwork-6.png");
   } 
   else if (value > 1200){
    $(".artwork").attr("src", "./image/Artwork-5.png");
   } 
   else if (value > 900){
    $(".artwork").attr("src", "./image/Artwork-4.png");
   } 
   else if (value > 600){
    $(".artwork").attr("src", "./image/Artwork-3.png");
   } 
   else if (value > 300){
    $(".artwork").attr("src", "./image/Artwork-2.png");
   }   
   else
      $(".artwork").attr("src", "./image/Artwork-1.png");
});


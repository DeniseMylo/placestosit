// By Denise Mylonakis

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 5900) {
    $(".artwork").attr("src", "./image/wrapper-3.png");
    document.getElementById("roll").style.display = 'block'
   } 
   else if (value > 5200){
    $(".artwork").attr("src", "./image/wrapper-2.png");
    document.getElementById("roll").style.display = 'block'
   } 
   else if (value > 4600){
    $(".artwork").attr("src", "./image/wrapper-1.png");
    document.getElementById("roll").style.display = 'block'
   } 
   else if (value > 3900){
    $(".artwork").attr("src", "./image/Artwork-7.png");
    document.getElementById("roll").style.display = 'none'
   } 
   else if (value > 3200){
    $(".artwork").attr("src", "./image/Artwork-6.png");
    document.getElementById("roll").style.display = 'none'
   } 
   else if (value > 2700){
    $(".artwork").attr("src", "./image/Artwork-5.png");
    document.getElementById("roll").style.display = 'none'
   } 
   else if (value > 2000){
    $(".artwork").attr("src", "./image/Artwork-4.png");
    document.getElementById("roll").style.display = 'none'
   } 
   else if (value > 1400){
    $(".artwork").attr("src", "./image/Artwork-3.png");
    document.getElementById("roll").style.display = 'none'
   } 
   else if (value > 700){
    $(".artwork").attr("src", "./image/Artwork-2.png");
    document.getElementById("roll").style.display = 'none'
   }   
   else{
      $(".artwork").attr("src", "./image/Artwork-1.png");
      document.getElementById("roll").style.display = 'none'
   }
});


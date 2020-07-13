document.addEventListener('click', function(){
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255); 
    var rgb = 'rgb('+ red +','+ green +','+ blue +')';
    document.body.style.color = rgb;
    document.body.style.backgroundColor = rgb;
    document.body.innerHTML = rgb;
}, false);
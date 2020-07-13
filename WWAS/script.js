document.body.onclick = function(){
    getRandomImage()
    let r = Math.round(((Math.random())*255));
    let g = Math.round(((Math.random())*255));
    let b = Math.round(((Math.random())*255));
    document.body.style.backgroundColor = "rgb("+r +"," + g+ ","+ b+")";
}

var randomImage = new Array();

randomImage[0] = "./image/dad.png";
randomImage[1] = "./image/dad2.png";
randomImage[2] = "./image/dad3.png";


function getRandomImage() { 
    var number = Math.floor(Math.random()*randomImage.length);
    document.getElementById("dadpic").src = randomImage[number];
}

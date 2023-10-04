const carousel = document.getElementById('carousel')
let count = 0;

setInterval(() => {
    if(count >= 0 && count  <= 3 ){
        count = count + 1
    }else{
        count = 1
    }

    carousel.style.backgroundImage = `url(../src/img/hotel${count}.jpg)`
}, 6000)
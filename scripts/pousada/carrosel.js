const carrosel = document.getElementById('pousadaCarrosel')
let count1 = 0;

setInterval(() => {
    if(count1 >= 0 && count1  <= 3 ){
        count1 = count1 + 1
    }else{
        count1 = 1
    }

    carrosel.style.backgroundImage = `url(../../src/img/hotel${count}.jpg)`
}, 5000)
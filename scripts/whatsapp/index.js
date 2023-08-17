const button = document.querySelector('#reservaButton')
const dataEntrada = document.querySelector('#dataEntrada')
const dataSaida = document.querySelector('#dataSaida')
const adulto = document.querySelector('#adultos')
const crianca = document.querySelector('#criancas')
const lugar = document.querySelector('#lugares')




function reserva(){
    const entrada = dataEntrada.value.split("-").reverse().join().replace(/,/g, "/")
    const saida = dataSaida.value.split("-").reverse().join().replace(/,/g, "/")

    window.location.href = `https://api.whatsapp.com/send?phone=558199992438&text=Local%20de%20reserva:%20${lugar.value}%0AData%20de%20check-in:%20${entrada}%0AData%20de%20checkout:%20${saida}%0AQuantidade%20de%20adultos:%20${adulto.value}%0AQuantidade%20de%20crian%C3%A7as:%20${crianca.value}`
}


/* Promoção */
const nome = document.querySelector("#promocaoNome")
const telefone = document.querySelector("#promocaoTelefone")
const email = document.querySelector("#promocaoEmail")

function promocao(){
    console.log('funciona')
    alert('funcionann')
    window.location.href = `https://api.whatsapp.com/send?phone=558199992438&text=Nome:%20${nome.value}%0ATelefone:%20${telefone.value}%0AEmail:%20${email.value}`
}
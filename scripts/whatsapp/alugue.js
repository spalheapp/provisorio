const nome = document.querySelector('#nome')
const endereco = document.querySelector('#endereco')
const tipoDeImovel = document.querySelector('#tipo')
const telefone = document.querySelector('#numero')
const quantidade = document.querySelector('#quantidade')
const email = document.querySelector('#email')

function simular() {
    window.location.href = `https://api.whatsapp.com/send?phone=5581981914968&text=Nome:%20${nome.value}%0AEndereço:%20${endereco.value}%0ATipo:%20${tipoDeImovel.value}%0AContato:%20${telefone.value}%0AQuantidade:%20${quantidade.value}%0AE-mail:%20${email.value}`}
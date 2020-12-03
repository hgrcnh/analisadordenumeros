let num = document.querySelector("#fnum")
let lista = document.querySelector("#flista")
let res = document.querySelector("#res")
let valores = []

//verificar números entre 1 e 100
const isNumero = (n) => Number(n) >= 1 && Number(n) <= 100 ? true : false 

//verificar se já existe o número solicitado na lista
const inLista = (n, l) => l.indexOf(Number(n)) == -1 ? true : false

//Objeto de ações
const controller = {
    //adicionar valor na array
    adcValores: (n) => valores.push(Number(n)),
    
    //redenrizar o select
    render: () => {
        lista.innerHTML = ''

        valores.forEach((n) => {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado !`
            lista.appendChild(item)
        })
    },

    fim: () => {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos valores temos ${soma}.`
        res.innerHTML += `<p>A média dos valores é ${media} .</p>`
    }
}

//funcao onclick do botao adicionar
const adicionar = () => {
    if(isNumero(num.value) && inLista(num.value, valores)) {
        controller.adcValores(num.value)
        controller.render()
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    // limpar e dar foto no input
    num.value = ''
    num.focus()
}

const finalizar = () => {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar !')
    } else {
        controller.fim()
    }
}

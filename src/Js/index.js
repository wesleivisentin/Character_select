/* OBJETIVO 1 - quando passar o mouse em cima do personagem temo que:

 - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animaçao nele

- retirar a classe selecionado do personagem que esta selecionado


OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

- aletrar a imagem do personagem jogador 1
- alterar o nome do porsonagem selecionado jogador 1

https://www.youtube.com/watch?v=8g-9zSafztw&t=6719s
 */


// const homemDeFerro = document.getElementById("homem-de-ferro")

// homemDeFerro.addEventListener("mouseenter", () => { 
//     homemDeFerro.classList.add("selecionado")
// })

const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        //////////////////////////////////////////
        const idSelecionado = personagem.attributes.id.value

        if(idSelecionado === "ultron"){
            return

        }

        ///////////////////////////////////////////
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")



        //OBEJETIVO 2
       
        
        const imagemJogador1 = document.getElementById("personagem-jogador-1")
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById("nome-jogador-1")
        const nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado
    })
})





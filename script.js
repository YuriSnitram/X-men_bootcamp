/* o que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul na seleção na imagem pequena do personagem e mostra a imagem, o nome e o terxto grande do personagem que esta selecionado

Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo

passo 1 - pegar os personagens no js pra poder verificar quando o usuário passar o mouse em cima de um deles.

passo 2 - adicionar classe selecionado no personagem que o usuário passar o cursor do mouse.

passo 3 - verificar se ja existia um personagem selecionado, se sim, devemos remover a seleção dele.
------------------------------------------

Objetivo 2 - quando passar o mouse em cima do personagem  na lista, trocar a imagem, o nome e a descrição do personagem grande.

passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.

passo 2 - alterar a imagem do personagem grande.

passo 3 - alterar o nome do personagem grande.

passo 4 - alterar a descrição dp personagem grande.
*/

// const itemCiclope = document.getElementById('ciclope');
// console.log(itemCiclope);

const personagens = document.querySelectorAll('.personagem')
console.log('personagens');


// addEventListner só funciona em um elemento, em lista não funciona
// addEventListener("click",() => {
//     console.log('clicou')
// })

// personagens.forEach(personagem => {
//     personagem.addEventListener('mouseenter', () => {
//         if (window.innerWidth < 450) {
//             window.scroll({ top: 0, behavior: 'smooth' });

//         }


        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')


        personagem.classList.add('selecionado')

        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value;


        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem')

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute("data-description")



    })
})

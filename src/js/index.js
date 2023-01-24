/* 
OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
   - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

   - passo 2 - dar um jeito de identificar quando o usuário clicar no botão.

   - passo 3 - dar um jeito de pegar o elemento da modal no js

   - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
   - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
   - passo 2 - dar um jeito de identificar quando o usuário clicar no X
   - passo 3 - fechar a modal 

*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function aleternarModal(){
    modal.classList.toggle("aberto");


}

// - passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    aleternarModal();
    video.setAttribute("src", linkDoVideo); 
});

// passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar modal
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
});




const imagens = document.querySelectorAll('.images img');
const botaoVerificar = document.getElementById('verificar');
let imagensSelecionadas = [];

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        imagem.classList.toggle('selecionada');
        const index = imagensSelecionadas.indexOf(imagem);
        if (index === -1) {
            imagensSelecionadas.push(imagem);
        } else {
            imagensSelecionadas.splice(index, 1);
        }
    });
});

botaoVerificar.addEventListener('click', () => {
    const selecaoCorreta = imagensSelecionadas.every(imagem => imagem.dataset.carro === 'true');

    if (selecaoCorreta && imagensSelecionadas.length === 6) {
        window.location.href = 'pag5.html'; // Substitua pelo link desejado
    } else {
        window.location.href = 'link-incorreto.html'; // Substitua pelo link de erro
    }
});
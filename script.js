document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const respostaCorreta = 'c'; // Resposta correta para a pergunta

    const respostaSelecionada = document.querySelector('input[name="q1"]:checked')?.value;

    if (respostaSelecionada === respostaCorreta) {
        window.location.href = 'interlude.html'; // Redireciona para a página de acerto
    } else {
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'; // Redireciona para a página de erro
    }
});
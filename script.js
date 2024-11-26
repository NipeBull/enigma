// Limite de dicas
const maxHints = 2;

// Dicas disponíveis
const hints = [
    "Dica 1: Lembre-se que o alfabeto começa com A, e a oitava letra é H.",
    "Dica 2: Na passagem da Palavra 'Enigma', considere a última letra como um 'A'."
];

// Função para mostrar dicas
document.getElementById("hint-button").addEventListener("click", function () {
    const hintsUsed = parseInt(localStorage.getItem("hintsUsed") || "0");

    const feedback = document.getElementById("hint-feedback");

    if (hintsUsed >= maxHints) {
        feedback.style.color = "red";
        feedback.textContent = "Você já usou todas as suas dicas.";
    } else {
        feedback.style.color = "white";
        feedback.textContent = hints[hintsUsed];
        localStorage.setItem("hintsUsed", hintsUsed + 1);
    }
});

// Verificação da resposta
document.getElementById("verify-button").addEventListener("click", function () {
    const solution = document.getElementById("solution").value.trim();
    const correctAnswer = "JxTfgxj88j"; // Resposta correta do enigma

    const feedback = document.getElementById("feedback");

    if (solution === correctAnswer) {
        feedback.style.color = "green";
        feedback.textContent = "Parabéns! Você decifrou o enigma com sucesso!";
    } else {
        feedback.style.color = "red";
        feedback.textContent = "Resposta incorreta. Tente novamente.";
    }
});

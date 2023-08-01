document.addEventListener("DOMContentLoaded", function () {
    const shampooImage = document.querySelector(".logo-image");
    const animateButton = document.getElementById("animate-button");
    const participants = [
        "Keiser",
        "Kéké",
        "Menezes",
        "Biscoito",
        "Fi de Keila",
    ];
    let currentIndex = 0;
    let animationId;

    function showNextParticipant() {
        shampooImage.alt = participants[currentIndex];
        currentIndex = (currentIndex + 1) % participants.length;
    }

    function animate() {
        showNextParticipant();
        animationId = requestAnimationFrame(animate);
    }

    function animateShampoo() {
        shampooImage.style.transform = "rotate(360deg)";
        animate();
        setTimeout(() => {
            cancelAnimationFrame(animationId);
            alert(`Surpresa! Todos os participantes são: ${participants.join(", ")}`);
            shampooImage.style.transform = "rotate(0deg)";
        }, 5000); // Tempo em milissegundos para mostrar todos os participantes (5 segundos neste caso)
    }

    animateButton.addEventListener("click", animateShampoo);
});

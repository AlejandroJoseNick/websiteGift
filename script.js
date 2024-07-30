function transitionToFlower() {
    document.body.style.transition = "background-color 2s";
    document.body.style.backgroundColor = "white";

    const container = document.querySelector('.container');
    container.style.transition = "opacity 2s";
    container.style.opacity = "0";

    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 2000); // Delay to allow the transition to complete
}

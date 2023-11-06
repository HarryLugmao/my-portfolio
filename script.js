// Add this JavaScript to your script.js file
const aboutBackground = document.querySelector('#about-background');
const portfolioBackground = document.querySelector('#portfolio-background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    aboutBackground.style.transform = `translate(-${mouseX * 50}px, -${mouseY * 50}px)`;
    portfolioBackground.style.transform = `translate(-${mouseX * 50}px, -${mouseY * 50}px)`;
});

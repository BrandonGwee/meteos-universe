const imgContainer = document.getElementById("image-container");
const spaceBG = document.getElementById("space_bg");

let isDragging = false;
let startX, startY;

imgContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - spaceBG.offsetLeft;
    startY = e.clientY - spaceBG.offsetTop;

    imgContainer.style.cursor = 'grabbing';
});

imgContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; //stop when mouse lets 

    const x = e.clientX - startX;
    const y = e.clientY - startY;

    spaceBG.style.left = `${x}px`;
    spaceBG.style.top = `${y}px`;
});

imgContainer.addEventListener('mouseup', () => {
    isDragging = false;
    imgContainer.style.cursor = 'grab';
});

imgContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});
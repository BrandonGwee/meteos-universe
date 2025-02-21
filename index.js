//Thanks to all the people whose work was used (with debatable consent) to power Mistral-7B and Llama2-70B

function adjustVolume() {
    const audioElements = document.querySelectorAll('audio');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    audioElements.forEach(audio => {
        const rect = audio.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(elementCenterX - viewportWidth / 2, 2) +
            Math.pow(elementCenterY - viewportHeight / 2, 2)
        );

        const maxDistance = Math.sqrt(
            Math.pow(viewportWidth / 2, 2) +
            Math.pow(viewportHeight / 2, 2)
        );

        const volume = 1 - (distance / maxDistance);
        audio.volume = Math.max(0, Math.min(1, volume));
    });
}

window.addEventListener('scroll', adjustVolume);
window.addEventListener('resize', adjustVolume);

adjustVolume();
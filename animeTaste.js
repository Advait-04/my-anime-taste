var colorThief = new ColorThief();

// Make sure everything is loaded
$(window).load(function () {
    const imageWrappers = document.getElementsByClassName("image-wrapper");
    for (currentImageWrapper of imageWrappers) {
        const currentFooter =
            currentImageWrapper.parentElement.children[1].children[1];

        const currentImage = currentImageWrapper.children[0];
        color = colorThief.getColor(currentImage);

        const genres = currentFooter.children;

        for (genre of genres) {
            genre.style.backgroundColor = `rgba(${color},1)`;
            genre.style.color = `rgba(${color}+,0.4)`;
        }
    }
});

// animation: iframe-cards-animation 2s ease-in-out 1 forwards

function onHover(e) {
    console.log(e);
    currentIframe = e.children[2];
    currentIframe.style = `position: absolute; animation: iframe-cards-animation-forward 1s ease-in-out 1 forwards;`;
}

function onHoverEnd(e) {
    console.log(e);
    currentIframe = e.children[2];
    currentIframe.style = `position: absolute; animation: iframe-cards-animation-backward 1s ease-out-in 1 forwards;`;
    currentIframe.style = "position: relative";
}

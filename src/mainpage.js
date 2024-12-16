// this page will display the default tab / content on the page

import { DOMelements } from ".";
// import mainPageImg from ".//alexandre-topolewski-95izPCyzmrc-unsplash.jpg";

const mainPageContent = () => {
    console.log("hello from mainpage");

    const bgImg = document.createElement("img");
    bgImg.src = mainPageImg;

    DOMelements.welcomeBanner.innerText = "Welcome to my super cool swag resturaunt, Currently on the home page rn."
    // DOMelements.welcomeBanner.style.backgroundImage = "url('src/alexandre-topolewski-95izPCyzmrc-unsplash.jpg')";

    // DOMelements.welcomeBanner.style.backgroundImage = bgImg;
};

export {mainPageContent};

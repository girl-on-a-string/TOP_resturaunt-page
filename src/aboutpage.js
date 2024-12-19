import { DOMelements } from ".";

const aboutPageContent = () => {
    DOMelements.welcomeBanner.innerText = "Idk what any of this is."
    DOMelements.welcomeBanner.style.backgroundImage = window.getComputedStyle(document.body).getPropertyValue("--aboutContentBG");
}

export {aboutPageContent};
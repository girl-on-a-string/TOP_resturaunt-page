import { DOMelements } from "."

const menuPageContent = () => {
    DOMelements.welcomeBanner.innerText = "Menu or something. HOnestly I shoudl have named this better"
    DOMelements.welcomeBanner.style.backgroundImage = window.getComputedStyle(document.body).getPropertyValue("--menuContentBG");
}

export {menuPageContent};
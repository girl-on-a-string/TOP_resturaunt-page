// this page will display the default tab / content on the page

import { DOMelements } from ".";

const mainPageContent = () => {
    console.log("hello from mainpage");

    DOMelements.welcomeBanner.innerText = "Welcome to my super cool swag website, Currently on the home page rn."
};

export {mainPageContent};

//this page will handle all the other pages displays and tab action

import { mainPageContent } from "./mainpage";
import "./styles.css";

console.log("hello from index");

const DOMelements = (() => {
    let welcomeBanner = document.createElement("div");
    welcomeBanner.setAttribute("id", "welcomeBanner");

    let contentDiv = document.getElementById("content");
    contentDiv.appendChild(welcomeBanner);

    // mainPageContent();

    return {
        welcomeBanner, contentDiv
    }
})();

mainPageContent()

export {DOMelements};


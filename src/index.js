//this page will handle all the other pages displays and tab action

import { mainPageContent } from "./mainpage";
import { aboutPageContent} from "./aboutpage";
import "./styles.css";

console.log("hello from index");

const DOMelements = (() => {
    let welcomeBanner = document.createElement("div");
    welcomeBanner.setAttribute("id", "welcomeBanner");

    let contentDiv = document.getElementById("content");
    
    let txtArea = document.createElement("div");
    txtArea.setAttribute("id", "txtArea");

    contentDiv.appendChild(welcomeBanner);
    contentDiv.appendChild(txtArea);

    // mainPageContent();

    return {
        welcomeBanner, contentDiv, txtArea
    }
})();

mainPageContent();

document.getElementById("about").addEventListener("click", () => {
    aboutPageContent();
});

export {DOMelements};


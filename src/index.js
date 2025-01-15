import "./styles.css";
import menuContent from "./menu.js";
import homeContent from "./home.js";
import contactContent from "./contact.js";

console.log("Index Connected");

homeButton = document.getElementById("homeButton");
menuButton = document.getElementById("menuButton");
contactButton = document.getElementById("contactButton");

homeButton.addEventListener("click", homeContent);
menuButton.addEventListener("click", menuContent);
contactButton.addEventListener("click", contactContent);

homeContent();

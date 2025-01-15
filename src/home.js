const content = document.getElementById("content");
import burgerImage from "./burger.jpg";

export default function homeContent() {
  content.innerHTML = "";

  const burgerElement = document.createElement("img");
  burgerElement.src = burgerImage;
  burgerElement.id = "burger-logo";

  const homeHeaderElement = document.createElement("h1")
  homeHeaderElement.innerText = "Big Bob's Burgers";

  const homeParagraphElement = document.createElement("p");
  homeParagraphElement.innerText = "When you're with Bob, you know it's the best";

  content.append(burgerElement, homeHeaderElement, homeParagraphElement);
};

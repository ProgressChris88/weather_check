const content = document.getElementById("content");
import contactImage from "./contactus.jpg";

export default function contactContent() {
  content.innerHTML = "";

  const contactHeaderElement = document.createElement("h1")
  contactHeaderElement.innerText = "Contact Us";

  const contactElement = document.createElement("img");
  contactElement.src = contactImage;
  contactElement.id = "contact-logo";

  const homeHeaderElement = document.createElement("h1")
  homeHeaderElement.innerText = "Make a Reservation Today";

  const homeParagraphElement = document.createElement("p");
  homeParagraphElement.innerText = "555-555-1234";

  const homeParagraphElement2 = document.createElement("p");
  homeParagraphElement2.innerText = "The Bob Family is anxiously awaiting your next visit!";

  content.append(contactHeaderElement, contactElement, homeHeaderElement, homeParagraphElement, homeParagraphElement2);
};

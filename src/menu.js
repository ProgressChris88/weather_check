import specialBurgerImage from "./bobsburgerspecial.jpg";
import bbqBurgerImage from "./bbqburger.png";
import beerImage from "./beer.jpg";
import pickleImage from "./pickle.png";

const content = document.querySelector("#content");

export default function menuContent() {
  content.innerHTML = "";


  const menu = document.createElement("div")
  menu.id = "menu";

  const menuHeaderElement = document.createElement("h1")
  menuHeaderElement.innerText = "Menu";

  const pickleElement = document.createElement("img");
  pickleElement.src = pickleImage;
  pickleElement.id = "pickle-logo";

  const bobBurgerFriesNotice = document.createElement("p");
  bobBurgerFriesNotice.innerText = "*All burgers are served with Bob's famous sweet potato fries and a juicy pickle on the side."

  menu.append(menuHeaderElement, pickleElement, bobBurgerFriesNotice);

  content.append(menu);

  const specialBurgerMenuCard = document.createElement("div");
  specialBurgerMenuCard.className = "menu-card";

  const specialBurgerImageElement = document.createElement("img");
  specialBurgerImageElement.src = specialBurgerImage;
  specialBurgerMenuCard.append(specialBurgerImageElement);

  const specialBurgerMenuDesc = document.createElement("div");
  specialBurgerMenuDesc.className = "menu-desc";

  const specialBurgerName = document.createElement("h2");
  specialBurgerName.innerText = "Bob's Special";

  const specialBurgerPrice = document.createElement("p");
  specialBurgerPrice.className = "price";
  specialBurgerPrice.innerText = "$13.99";

  const specialBurgerMenuContent = document.createElement("p");
  specialBurgerMenuContent.innerText = "Two juicy, flame-grilled beef patties topped with smoky bacon, melted Swiss cheese, a perfectly fried egg, and a rich garlic aioli, all served on a toasted brioche bun.";

  specialBurgerMenuDesc.append(specialBurgerName, specialBurgerPrice, specialBurgerMenuContent);
  specialBurgerMenuCard.append(specialBurgerImageElement, specialBurgerMenuDesc);

  const bbqBurgerMenuCard = document.createElement("div");
  bbqBurgerMenuCard.className = "menu-card";

  const bbqBurgerImageElement = document.createElement("img");
  bbqBurgerImageElement.src = bbqBurgerImage;
  bbqBurgerMenuCard.append(bbqBurgerImageElement);

  const bbqBurgerMenuDesc = document.createElement("div");
  bbqBurgerMenuDesc.className = "menu-desc";

  const bbqBurgerName = document.createElement("h2");
  bbqBurgerName.innerText = "BBQ Burger";

  const bbqBurgerPrice = document.createElement("p");
  bbqBurgerPrice.className = "price";
  bbqBurgerPrice.innerText = "$11.99";

  const bbqBurgerMenuContent = document.createElement("p");
  bbqBurgerMenuContent.innerText = "A childhood favorite of Chef Bob, this juicy beef patty is grilled to perfection and smothered in smoky BBQ sauce, just like he remembers. Topped with melted cheddar cheese and tangy pickles, served on a toasted brioche bun for a taste of nostalgia with every bite. A burger made with heart and soul.";

  bbqBurgerMenuDesc.append(bbqBurgerName, bbqBurgerPrice, bbqBurgerMenuContent);
  bbqBurgerMenuCard.append(bbqBurgerImageElement, bbqBurgerMenuDesc);

  const beerMenuCard = document.createElement("div");
  beerMenuCard.className = "menu-card";

  const beerImageElement = document.createElement("img");
  beerImageElement.src = beerImage;
  beerMenuCard.append(beerImageElement);

  const beerMenuDesc = document.createElement("div");
  beerMenuDesc.className = "menu-desc";

  const beerName = document.createElement("h2");
  beerName.innerText = "Locally Brewed Beer";

  const beerPrice = document.createElement("p");
  beerPrice.className = "price";
  beerPrice.innerText = "Pint $7.99";

  const beerMenuContent = document.createElement("p");
  beerMenuContent.innerText = "Sourced fresh from local breweries, our rotating selection of craft beers offers something new every day. Whether you prefer a crisp lager, hoppy IPA, or smooth stout, enjoy the best flavors our community has to offer.";

  beerMenuDesc.append(beerName, beerPrice, beerMenuContent);
  beerMenuCard.append(beerImageElement, beerMenuDesc);

  menu.append(specialBurgerMenuCard, bbqBurgerMenuCard, beerMenuCard);
};

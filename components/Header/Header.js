import { logo } from "../logo.js";

const links = ["Rental car", "Car sharing", "Car leasing", "Usefull information", "Corporate Intelligence", "Recruiment Information","FAQ", "Language"];
const padding = 20;

export const Header = () => {

  const linkElement = headerLinks();
  let header = document.createElement("header");

//   console.log("====================================");
//   console.log(linkElement);
//   console.log("====================================");

  header.style.paddingLeft = `${padding}px`;
  header.style.paddingRight = `${padding}px`;

  header.appendChild(logo());
  header.appendChild(linkElement);
  document.body.appendChild(header);
};

const headerLinks = () => {
  let unordered = "";
  links.forEach((i, j) => {
    unordered += `<li>` + i + "</li>";
  });

  let node = document.createElement("ul");
  node.innerHTML = unordered
  node.style.fontWeight = "semi-bold"
  return node;
};
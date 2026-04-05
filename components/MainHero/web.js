import { spinnerButton } from "../buttons.js";
let start = 500
let end = window.innerWidth
export const webHero = () => {
  const hero = document.createElement("div");
  let top = document.createElement("div");
  let bottom = document.createElement("div");
  let left = document.createElement("div");
  hero.id = "web-hero";
  hero.className = "hero";
  
  top.className = "hero-top";
  top.textContent = "Find the best deal for your next trip in Okinawa";
  bottom.className = "hero-bottom";
  bottom.id = "hero-bottom";
  left.className = "hero-left";
  left.style.width = `${start}px`
  bottom.appendChild(left);
  
  hero.appendChild(top);
  
  let spinning = spinner()
  bottom.appendChild(spinning);
  hero.appendChild(bottom);
  
  document.body.appendChild(hero);
  console.log(start, end);
};

const categoryImages = [
  {
    text: "SUV",
    src: "public/SUV.png",
    desc: "Recommended for 4 people, 6 hours, from 11,000 yen.",
    sil: "public/Icons/suv_sil.png",
  },
  {
    text: "Passenger car",
    src: "public/Passenger.png",
    desc: "Recommended for 2 people, 6 hours, from 11,000 yen.",
    sil: "public/Icons/car_sil.png",
  },
  {
    text: "Van",
    src: "public/van.png",
    desc: "Recommended for small group, 6 hours, from 11,000 yen.",
    sil: "public/Icons/van_sil.png",
  },
];
const spinner = () => {
  const carousel = document.createElement("div");
  carousel.className = "carousel";
  carousel.id = "carousel";
  categoryImages.forEach(({ src, text, desc, sil },i) => {
    let node = document.createElement("div");
    let node_text = document.createElement("div");
    let dot = document.createElement("div");
    dot.className = "carousel-dot";
    
    node_text.className = "carousel-item-text";
    node.style.backgroundImage = `url(${src})`;
    node.className = "carousel-item";
    
    carousel.addEventListener("mousemove", (e, o) => {
      let center = (end-start)/2+start
      let range = (e.clientX) - center
      dot.style.transform =  `translateX(${range*0.1}px)`
    });
    carousel.addEventListener("mouseout", (e, o) => {
      dot.style.transform =  `translateX(0px)`
    });
    
    node_text.innerHTML = `<img src="${sil}"/><p>${desc}</p>`;
    node_text.appendChild(spinnerButton(text, ()=>alert(text)));
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    node.appendChild(overlay);
    node.appendChild(node_text);
    node.appendChild(dot);
    carousel.appendChild(node);
  });
  
  return carousel;
};

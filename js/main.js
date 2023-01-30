import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import intro from "./sections/intro.js";
import adolphe from "./sections/adolphe.js";
import sectionThree from "./sections/sectionThree.js";
import verticalScroll from "./sections/verticalScroll.js";
import features from "./sections/features.js";
import sapphire from "./sections/sapphire.js";
import family from "./sections/family.js";
import familyMembers from "./sections/familyMembers.js";
import goToConcert from "./sections/goToConcert.js";
import getInTouch from "./sections/getInTouch.js";

import "../css/style.css";

gsap.registerPlugin(ScrollTrigger);



const click = () => {
  console.log("test");
};

intro(gsap);
adolphe(gsap, ScrollTrigger);
sectionThree(gsap);
features(gsap);
sapphire(gsap, ScrollTrigger);
family(gsap);
familyMembers(gsap);
goToConcert(gsap);
getInTouch();
verticalScroll(gsap, ScrollTrigger);

let song = new Audio("./song/titanic.mp3");
const titanic = (event) => {
  song.play();
};

let sapphire__song = document.querySelector(".sapphire__song");

const init = () => {
  sapphire__song.addEventListener("click", titanic);
};
init();

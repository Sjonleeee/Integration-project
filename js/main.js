import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import intro from "./sections/intro.js";
import adolphe from "./sections/adolphe.js";
import sectionThree from "./sections/sectionThree.js";
import verticalScroll from "./sections/verticalScroll.js";
import features from "./sections/features.js";
import sapphire from "./sections/sapphire.js";
import family from "./sections/family.js";
import showFamily from "./sections/showFamily.js";
import guessMember from "./sections/guessMember.js";
import goToConcert from "./sections/goToConcert.js";
import getInTouch from "./sections/getInTouch.js";

import "../css/style.css";


gsap.registerPlugin(ScrollTrigger);

intro(gsap);
adolphe(gsap);
sectionThree(gsap);
features(gsap);
sapphire();
family();
showFamily();
guessMember();
goToConcert();
getInTouch();
verticalScroll(gsap, ScrollTrigger)

// function playMusic() {
// const $titanic__song = document.QuerySelector(".titanic__song")
// $titanic__song.play();

// if () {
    
// } else {
    
// }
// }


let song = new Audio("./assets/song/titanic.mp3");
const titanic = (event) => {
    console.log('test')
  song.play();
};

let sapphire__song = document.querySelector(".sapphire__song");
const init = () => {
    sapphire__song.addEventListener("click", titanic);
}
init()
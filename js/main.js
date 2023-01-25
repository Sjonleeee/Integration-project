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
sectionThree();
features();
sapphire();
family();
showFamily();
guessMember();
goToConcert();
getInTouch();
verticalScroll(gsap, ScrollTrigger);

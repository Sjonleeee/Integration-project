const sapphire = (gsap) => {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 390px)",
      isIpad: "(min-width: 834px)",
      isDesktop: "(min-width: 1512px)",
    },
    (context) => {
      const { isMobile, isIpad, isDesktop } = context.conditions;

      const tl = gsap.timeline({
        repeatDelay: 1,
        scrollTrigger: {
          trigger: ".getToKnowHer",
          scrub: true,
          // markers: true,
          start: "top 20%",
          end: "bottom -20%",
        },
      });

      tl.from(".getToKnowHer", {
        opacity: 0,
        y: -300,
        duration: 8,
      });

      tl.from(".sapphire__mouth", {
        opacity: 0,
        delay: 1,
        x: -300,
        duration: 6,
      });

      tl.from(".sapphire__leftHand", {
        opacity: 0,
        delay: 2,
        x: 300,
        duration: 7,
      });

      tl.from(".sapphire__body", {
        opacity: 0,
        delay: 3,
        x: -300,
        duration: 8,
      });

      tl.from(".sapphire__rightHand", {
        opacity: 0,
        delay: 4,
        x: -300,
        duration: 9,
      });
      tl.from(".sapphire__bell", {
        opacity: 0,
        delay: 5,
        x: 300,
        duration: 10,
      });
    }
  );

  // Mouth buttons
  const mouthBtn = document.querySelector("#mouth__piece--click");
  const mouthBtnClose = document.querySelector(".mouthCloseIcon");
  const mouthInfo = document.querySelector(".sapphire__mouth--info");

  // Lefthand buttons
  const leftHandBtn = document.querySelector("#leftHand--click");
  const leftHandBtnClose = document.querySelector(".leftHandCloseIcon");
  const leftHandInfo = document.querySelector(".sapphire__leftHand--info");

  // Body buttons
  const bodyBtn = document.querySelector("#body--click");
  const bodyBtnClose = document.querySelector(".bodyCloseIcon");
  const bodyInfo = document.querySelector(".sapphire__body--info");

  // Right hand buttons
  const rightHandBtn = document.querySelector("#rightHand--click");
  const rightHandBtnClose = document.querySelector(".rightHandCloseIcon");
  const rightHandInfo = document.querySelector(".sapphire__rightHand--info");

  // Right hand buttons
  const bellBtn = document.querySelector("#bell--click");
  const bellBtnClose = document.querySelector(".bellCloseIcon");
  const bellInfo = document.querySelector(".sapphire__bell--info");

  // ------------------------------------------------------------------
  // Mouth click
  mouthBtn.addEventListener("click", () => {
    mouthInfo.style.display = "flex";
  });
  mouthBtnClose.addEventListener("click", () => {
    mouthInfo.style.display = "none";
  });

  // LeftHand click
  leftHandBtn.addEventListener("click", () => {
    leftHandInfo.style.display = "flex";
  });
  leftHandBtnClose.addEventListener("click", () => {
    leftHandInfo.style.display = "none";
  });

  //  Body click
  bodyBtn.addEventListener("click", () => {
    bodyInfo.style.display = "flex";
  });
  bodyBtnClose.addEventListener("click", () => {
    bodyInfo.style.display = "none";
  });

  //  Righthand click
  rightHandBtn.addEventListener("click", () => {
    rightHandInfo.style.display = "flex";
  });
  rightHandBtnClose.addEventListener("click", () => {
    rightHandInfo.style.display = "none";
  });

  //  Righthand click
  bellBtn.addEventListener("click", () => {
    bellInfo.style.display = "flex";
  });
  bellBtnClose.addEventListener("click", () => {
    bellInfo.style.display = "none";
  });
};

export default sapphire;

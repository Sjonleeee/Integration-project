const sapphire = (gsap) => {
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

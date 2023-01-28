const sapphire = (gsap) => {
  //   document
  //     .querySelector("#mouth__piece--click")
  //     .addEventListener("click", () => {});

  const mouthBtn = document.querySelector("#mouth__piece--click");
  const mouthBtnClose = document.querySelector(".mouthCloseIcon");
  const mouthInfo = document.querySelector(".sapphire__mouth--info");

  const bodyBtn = document.querySelector("#body--click");
  const bodyBtnClose = document.querySelector(".bodyCloseIcon");
  const bodyInfo = document.querySelector(".sapphire__body--info");

  // Mouth
  mouthBtn.addEventListener("click", () => {
    mouthInfo.style.display = "flex";
  });

  mouthBtnClose.addEventListener("click", () => {
    mouthInfo.style.display = "none";
  });

  //  Body
  bodyBtn.addEventListener("click", () => {
    bodyInfo.style.display = "flex";
  });

  bodyBtnClose.addEventListener("click", () => {
    bodyInfo.style.display = "none";
  });
};

export default sapphire;

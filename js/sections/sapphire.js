const sapphire = (gsap) => {
  //   document
  //     .querySelector("#mouth__piece--click")
  //     .addEventListener("click", () => {});

  const mouthBtn = document.querySelector("#mouth__piece--click");
  const closeBtn = document.querySelector(".closeIcon");
  const mouthInfo = document.querySelector(".sapphire__mouth--info");
  mouthBtn.addEventListener("click", () => {
    mouthInfo.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    mouthInfo.style.display = "none";
  });
};

export default sapphire;

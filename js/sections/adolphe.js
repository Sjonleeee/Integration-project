const adolphe = (gsap) => {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 390px)",
      isIpad: "(max-width: 834px)",
      isDesktop: "(min-width: 835px)",
    },
    (context) => {
      const { isMobile, isIpad, isDesktop } = context.conditions;

      const animationHelper = (S, M, L) => {
        if (isMobile) {
          return S;
        }
        if (isIpad) {
          return M;
        }
        return L;
      };
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sectionTwo__adolphe",
          scrub: true,
          // markers: true,
          start: "top 40%",
          end: "top -40%",
        },
      });

      // title
      tl.from(".title__name", {
        x: animationHelper(400, 600, 1000),
        duration: 8,
      });

      tl.to(
        ".title__date",
        {
          x: animationHelper(-350, -555, -680),
          duration: 10,
        },
        "<"
      );
      tl.from(".sectionTwo__miniArrowOne", {
        y: -350,
        opacity: animationHelper(1, 1, 0),
        duration: 6,
      });

      tl.from(
        ".sectionTwo__miniArrowTwo",
        {
          y: -320,
          opacity: animationHelper(1, 1, 0),
          duration: 5,
        },
        "<"
      );

      tl.from(
        ".sectionTwo__p",
        {
          opacity: 0,
          y: -200,
          duration: 5,
        },
        "<"
      );

      tl.from(
        ".sectionTwo__secretButton",
        {
          opacity: 0,
          y: -190,
          duration: 8,
        },
        "<"
      );

      tl.from(".sectionTwo__mannekePis", {
        trigger: ".sectionTwo__adolphe",
        pin: ".pin",
        start: "top 0%",
        end: "top 0% ",
        // markers: true,
        opacity: 0,
        y: -100,
        duration: 8,
      });
    }
  );

  // if (isDesktop) {
  //   gsap.to(".sectionTwo__secretButton", {
  //     scale: 2,
  //     duration: 0.5,
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // }

  const secretBtn = document.querySelector(".sectionTwo__secretButton");
  const secretBtnClose = document.querySelector(
    ".sectionTwo__secretInfo__close__button"
  );
  const secretInfo = document.querySelector(".sectionTwo__secretInfo");

  secretBtn.addEventListener("click", () => {
    secretInfo.style.display = "block";
  });

  secretBtnClose.addEventListener("click", () => {
    secretInfo.style.display = "none";
  });
};

export default adolphe;

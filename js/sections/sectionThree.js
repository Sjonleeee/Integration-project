const sectionThree = (gsap) => {
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
          trigger: ".cutted__background",
          scrub: true,
          // markers: true,
          start: "top 30%",
          end: "bottom -15%",
        },
      });
      gsap.from(".flowers", {
        scale: 1.1,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
      });

      tl.from(".sectionThree__adolpheSax", {
        x: animationHelper(-400, -800, -1150),
        duration: 10,
      });

      tl.from(".flowers", {
        opacity: 0,
        duration: 10,
      });

      tl.from(".head__adolphe", {
        x: animationHelper(-180, -400, -800),
        duration: 5,
      });

      tl.from(".saxophone", {
        x: animationHelper(180, 300, 500),
        duration: 5,
      });

      tl.from(".sectionThree__sapphire", {
        x: animationHelper(400, 800, 1100),
        // x: isMobile ? 400 : 800,
        duration: 10,
      });
    }
  );
};

export default sectionThree;

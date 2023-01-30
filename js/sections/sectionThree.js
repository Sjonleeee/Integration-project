const sectionThree = (gsap) => {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 390px)",
      isDesktop: "(min-width: 1512px)",
    },
    (context) => {
      const { isMobile, isIpad, isDesktop } = context.conditions;
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
        x: isMobile ? -400 : -800,
        x: isDesktop ? -1150 : -1500,
        duration: 10,
      });

      tl.from(".flowers", {
        opacity: 0,
        duration: 10,
      });

      tl.to(".head__adolphe", {
        x: isMobile ? 300 : 400,
        x: isDesktop ? 850 : 1000,

        duration: 5,
      });

      tl.to(".saxophone", {
        x: isMobile ? -300 : -400,
        x: isDesktop ? -750 : -800,

        duration: 5,
      });

      tl.from(".sectionThree__sapphire", {
        x: isMobile ? 400 : 800,
        duration: 10,
      });
    }
  );
};

export default sectionThree;

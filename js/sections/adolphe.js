const adolphe = (gsap, scrollTrigger) => {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 390px)",
      isIpad: "(min-width: 834px)",
      isDesktop: "(min-width: 1512px)",
    },
    (context) => {
      const { isMobile, isDesktop } = context.conditions;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sectionTwo__adolphe",
          scrub: true,
          // markers: true,
          start: "top 25%",
          end: "center 0%",
        },
      });

      tl.to(".title__name", {
        x: isMobile ? 350 : 600,
        duration: 10,
      });

      tl.to(
        ".title__date",
        {
          x: isMobile ? -350 : -555,
          duration: 10,
        },
        "<"
      );
      tl.from(".sectionTwo__miniArrowOne", {
        y: -350,

        duration: 6,
      });

      tl.from(
        ".sectionTwo__miniArrowTwo",
        {
          y: -320,
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

        markers: true,
        opacity: 0,
        y: -100,
        duration: 8,
      });
    }
  );
};

export default adolphe;

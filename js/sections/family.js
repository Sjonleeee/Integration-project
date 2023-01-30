const family = (gsap) => {
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
          trigger: ".family__p",
          scrub: true,
        //   markers: true,
          start: "top 20%",
          end: "bottom -20%",
        },
      });

      tl.from(".family__title__soThey", {
        opacity: 0,
        y: -100,
        duration: 8,
      });

      tl.from(".family__title__decide", {
        opacity: 0,
        y: -100,
        duration: 8,
      });
      tl.from(".family__title__family", {
        opacity: 0,
        y: -100,
        duration: 8,
      });
      gsap.from(".family__p--2", {
        scrollTrigger: {
          trigger: ".family__title__decide",
          scrub: true,
        //   markers: true,
          start: "top 20%",
          end: "bottom -20%",
        },
        opacity: 0,
        y: -100,
        delay: 5,
      });
    }
  );
};
export default family;

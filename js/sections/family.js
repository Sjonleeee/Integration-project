const family = (gsap) => {
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
    };
export default family;
